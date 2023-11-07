import styles from './styles.module.css'

const SearchButton = () => {
	return (
		<button type='submit' className={styles.searchButton}>
			<span className={styles.text}>Search</span>
		</button>
	)
}

export default SearchButton
