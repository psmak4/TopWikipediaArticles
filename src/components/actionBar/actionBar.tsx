import { MouseEvent, useState } from 'react'
import WikipediaApi from '~/api/wikipedia'
import NumResultsDropdown from '~/components/numResultsDropdown'
import SearchButton from '~/components/searchButton'
import { setArticles } from '~/stores/articlesStore'
import styles from './styles.module.css'

const ActionBar = () => {
	const [searchDisabled, setSearchDisabled] = useState<boolean>(false)

	const handleSubmit = async (event: MouseEvent<HTMLFormElement>) => {
		event.preventDefault()

		try {
			setSearchDisabled(true)
			const date = new Date(2015, 9, 10)
			const results = await WikipediaApi.GetTopArticlesByDate({ date })
			const articles = results.items[0].articles
			setArticles(articles)
		} catch (error) {
			console.error(error)
		} finally {
			setSearchDisabled(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.actionBar}>
			<NumResultsDropdown />
			<SearchButton disabled={searchDisabled} />
		</form>
	)
}

export default ActionBar
