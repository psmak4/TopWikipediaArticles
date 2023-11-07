import styles from './styles.module.css'

interface SearchButtonProps {
	disabled: boolean
}

const SearchButton = ({ disabled }: SearchButtonProps) => {
	return (
		<button type='submit' className={styles.searchButton} disabled={disabled}>
			<span className={styles.text}>Search</span>
		</button>
	)
}

export default SearchButton
