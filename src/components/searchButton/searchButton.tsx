import styles from './styles.module.css'

const SearchButton = () => {
	return (
		<button className={styles.searchButton}>
			<span className={styles.text}>Search</span>
		</button>
	)
}

export default SearchButton
