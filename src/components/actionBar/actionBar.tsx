import { MouseEvent } from 'react'
import SearchButton from '../searchButton'
import styles from './styles.module.css'

const ActionBar = () => {
	const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit} className={styles.actionBar}>
			<SearchButton />
		</form>
	)
}

export default ActionBar
