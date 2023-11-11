import { MouseEvent } from 'react'
import ArticlesStore, { setCurrentPage, setPageSize } from '~/stores/articlesStore'
import styles from './styles.module.css'

const numResultsOptions = [25, 50, 75, 100, 200]

interface DropdownListProps {
	onChange?: () => void
}

const DropdownList = ({ onChange = () => void 0 }: DropdownListProps) => {
	const { articles, currentPage } = ArticlesStore()

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		const button = event.target as HTMLButtonElement
		const pageSize = parseInt(button.dataset.value as string)

		const pageCount = Math.ceil(articles.length / pageSize)

		setPageSize(pageSize)

		if (pageCount < currentPage) setCurrentPage(pageCount)

		onChange()
	}

	return (
		<div role='list' className={styles.dropdownList}>
			{numResultsOptions.map((option, idx) => (
				<button key={idx} className={styles.item} onClick={handleClick} data-value={option}>
					{option}
				</button>
			))}
		</div>
	)
}

export default DropdownList
