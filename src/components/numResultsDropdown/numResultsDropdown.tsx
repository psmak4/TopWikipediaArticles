import { useState } from 'react'
import DropdownList from '~/components/dropdownList'
import ArticlesStore from '~/stores/articlesStore'
import ButtonWithIcon from '../buttonWithIcon'
import styles from './styles.module.css'

const NumResultsDropdown = () => {
	const { pageSize } = ArticlesStore()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const icon = (
		<div className={styles.icon}>
			<i className={`${styles.iconContent} fa-solid fa-list-ul`}></i>
		</div>
	)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const onChange = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.numResultsDropdown}>
			<ButtonWithIcon icon={icon} isOpen={isOpen} label='# RESULTS' onClick={handleClick} value={pageSize} />
			{isOpen && <DropdownList onChange={onChange} />}
		</div>
	)
}

export default NumResultsDropdown
