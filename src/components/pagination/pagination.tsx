import { ReactNode, useEffect, useState } from 'react'
import ArticlesStore, { setCurrentPage } from '~/stores/articlesStore'
import styles from './styles.module.css'

const Pagination = () => {
	const { articles, currentPage, pageSize } = ArticlesStore()
	const [pageCount, setPageCount] = useState<number>(0)

	const getPageButtons = (): ReactNode[] => {
		const start = currentPage > 2 ? currentPage - 2 : 1
		const end = Math.max(currentPage + 1 < pageCount ? currentPage + 1 : pageCount, 4)
		const buttons: ReactNode[] = []

		for (let i = start; i <= end; i++) {
			const style = i === currentPage ? `${styles.pageButton} ${styles.pageButtonSelected}` : `${styles.pageButton}`
			buttons.push(
				<button key={`pageButton-${i}`} className={style} onClick={() => setCurrentPage(i)}>
					<span className={styles.buttonContent}>{i}</span>
				</button>,
			)
		}

		return buttons
	}

	useEffect(() => {
		const count = Math.ceil(articles.length / pageSize)
		setPageCount(count)
	}, [articles, pageSize])

	return (
		<div className={styles.pagination}>
			<div className={styles.buttonContainer}>{getPageButtons()}</div>
		</div>
	)
}

export default Pagination
