import { MouseEvent } from 'react'
import { setPageSize } from '~/stores/articlesStore'
import styles from './styles.module.css'

const numResultsOptions = [25, 50, 75, 100, 200]

interface DropdownListProps {
	onChange?: () => void
}

const DropdownList = ({ onChange = () => void 0 }: DropdownListProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		const button = event.target as HTMLButtonElement
		const value = parseInt(button.dataset.value as string)
		setPageSize(value)
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
