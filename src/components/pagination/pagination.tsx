import { ReactNode } from 'react'
import ArticlesStore, { setCurrentPage } from '~/stores/articlesStore'
import DirectionButton from '../directionButton'
import styles from './styles.module.css'

const Pagination = () => {
	const { articles, currentPage, pageSize } = ArticlesStore()

	const getPageButtons = (): ReactNode[] => {
		const pageCount = Math.ceil(articles.length / pageSize)
		const start = currentPage > 2 ? currentPage - 2 : 1
		const end = pageCount < 4 ? pageCount : currentPage + 1 < pageCount ? currentPage + 1 : pageCount
		const buttons: ReactNode[] = []

		for (let i = start; i <= end; i++) {
			const style = i === currentPage ? `${styles.pageButton} ${styles.pageButtonSelected}` : `${styles.pageButton}`
			const disabled = currentPage === i
			buttons.push(
				<button key={`pageButton-${i}`} className={style} onClick={() => setCurrentPage(i)} disabled={disabled}>
					<span className={styles.buttonContent}>{i}</span>
				</button>,
			)
		}

		return buttons
	}

	return (
		<div className={styles.pagination}>
			<DirectionButton direction='prev' />
			<div className={styles.buttonContainer}>{getPageButtons()}</div>
			<DirectionButton direction='next' />
		</div>
	)
}

export default Pagination
