import { MouseEvent, useEffect, useState } from 'react'
import WikipediaApi from '~/api/wikipedia'
import NumResultsDropdown from '~/components/numResultsDropdown'
import SearchButton from '~/components/searchButton'
import ArticlesStore, { setArticles } from '~/stores/articlesStore'
import DatePicker from '../datePicker'
import styles from './styles.module.css'

const ActionBar = () => {
	const { searchDate } = ArticlesStore()
	const [searchDisabled, setSearchDisabled] = useState<boolean>(false)

	const getArticles = async (): Promise<void> => {
		try {
			setSearchDisabled(true)
			const response = await WikipediaApi.GetTopArticlesByDate({ date: searchDate })
			const articles = response.items[0].articles
			setArticles(articles)
		} catch (error) {
			console.error(error)
		} finally {
			setSearchDisabled(false)
		}
	}

	const handleSubmit = async (event: MouseEvent<HTMLFormElement>) => {
		event.preventDefault()

		await getArticles()
	}

	useEffect(() => {
		getArticles()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<form onSubmit={handleSubmit} className={styles.actionBar}>
			<DatePicker />
			<NumResultsDropdown />
			<SearchButton disabled={searchDisabled} />
		</form>
	)
}

export default ActionBar
