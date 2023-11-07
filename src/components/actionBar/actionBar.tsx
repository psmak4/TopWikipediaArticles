import SearchButton from '../searchButton'
import styles from './styles.module.css'

const ActionBar = () => {
	return (
		<div className={styles.actionBar}>
			<SearchButton />
		</div>
	)
}

export default ActionBar
