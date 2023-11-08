import { MouseEvent, useState } from 'react'
import DropdownList from '~/components/dropdownList'
import ArticlesStore from '~/stores/articlesStore'
import styles from './styles.module.css'

const NumResultsDropdown = () => {
	const { pageSize } = ArticlesStore()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		setIsOpen(!isOpen)
	}

	const onChange = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.numResultsDropdown}>
			<button className={styles.button} onClick={handleClick}>
				<div className={styles.icon}>
					<i className={`${styles.iconContent} fa-solid fa-list-ul`}></i>
				</div>
				<div className={styles.text}>
					<div className={styles.label}>
						<div className={styles.labelContent}># RESULTS</div>
						{!isOpen && <i className={`${styles.labelIcon} fa-solid fa-chevron-down`}></i>}
						{isOpen && <i className={`${styles.labelIcon} fa-solid fa-chevron-up`}></i>}
					</div>
					<div className={styles.value}>{pageSize}</div>
				</div>
			</button>
			{isOpen && <DropdownList onChange={onChange} />}
		</div>
	)
}

export default NumResultsDropdown
