import { useState } from 'react'
import listIcon from '~/assets/list-icon.png'
import DropdownList from '~/components/dropdownList'
import ArticlesStore from '~/stores/articlesStore'
import ButtonWithIcon from '../buttonWithIcon'
import styles from './styles.module.css'

const label = '# RESULTS'

const NumResultsDropdown = () => {
	const { pageSize } = ArticlesStore()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const icon = <img src={listIcon} alt={label} />

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const onChange = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.numResultsDropdown}>
			<ButtonWithIcon icon={icon} isOpen={isOpen} label={label} onClick={handleClick} value={pageSize} />
			{isOpen && <DropdownList onChange={onChange} />}
		</div>
	)
}

export default NumResultsDropdown
