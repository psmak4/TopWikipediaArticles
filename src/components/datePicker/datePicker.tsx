import { useState } from 'react'
import calendarIcon from '~/assets/calendar-icon.png'
import ArticlesStore from '~/stores/articlesStore'
import ButtonWithIcon from '../buttonWithIcon'
import CalendarDropdown from '../calendarDropdown'
import styles from './styles.module.css'

const label = 'DATE'

const DatePicker = () => {
	const { searchDate } = ArticlesStore()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const icon = <img src={calendarIcon} alt={label} />

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const onChange = () => {
		setIsOpen(false)
	}

	const getFormattedDate = (date: Date): string => {
		if (!date) return ''

		return date.toLocaleDateString(navigator.language, {
			month: 'long',
			day: '2-digit',
			year: 'numeric',
		})
	}

	return (
		<div className={styles.datePicker}>
			<ButtonWithIcon icon={icon} isOpen={isOpen} label={label} onClick={handleClick} value={getFormattedDate(searchDate)} />
			{isOpen && <CalendarDropdown onChange={onChange} />}
		</div>
	)
}

export default DatePicker
