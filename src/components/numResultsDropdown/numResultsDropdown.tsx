import { useState } from 'react'
import listIconLg from '~/assets/list-icon-lg.png'
import listIcon from '~/assets/list-icon.png'
import DropdownList from '~/components/dropdownList'
import ArticlesStore from '~/stores/articlesStore'
import ButtonWithIcon from '../buttonWithIcon'
import styles from './styles.module.css'

const label = '# RESULTS'
const labelLg = 'NUM RESULTS'

const NumResultsDropdown = () => {
	const { pageSize } = ArticlesStore()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const icon = <img src={listIcon} alt={label} />
	const iconLg = <img src={listIconLg} alt={label} />

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const onChange = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.numResultsDropdown}>
			<ButtonWithIcon icon={icon} iconLg={iconLg} isOpen={isOpen} label={label} labelLg={labelLg} onClick={handleClick} value={pageSize} />
			{isOpen && <DropdownList onChange={onChange} />}
		</div>
	)
}

export default NumResultsDropdown
