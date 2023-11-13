import { MouseEvent } from 'react'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
import ArticlesStore, { setSearchDate } from '~/stores/articlesStore'
import styles from './styles.module.css'

const today = new Date()

interface CalendarDropdownProps {
	onChange: () => void
}

// The following is needed in order to work with react-calendar's onChange event
type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const CalendarDropdown = ({ onChange = () => void 0 }: CalendarDropdownProps) => {
	const { searchDate } = ArticlesStore()

	const handleChange = (value: Value, event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		if (!value || Array.isArray(value)) return // Do not do anything if no value is given or if it is an array

		setSearchDate(value as Date)

		onChange()
	}

	return (
		<div className={styles.calendarDropdown}>
			<Calendar onChange={handleChange} value={searchDate} maxDate={new Date(today.setDate(today.getDate() - 1))} calendarType='gregory' />
		</div>
	)
}

export default CalendarDropdown
