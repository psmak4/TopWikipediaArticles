import { MouseEvent, useEffect, useState } from 'react'
import WikipediaApi from '~/api/wikipedia'
import NumResultsDropdown from '~/components/numResultsDropdown'
import SearchButton from '~/components/searchButton'
import Article from '~/models/article'
import { setArticles } from '~/stores/articlesStore'
import styles from './styles.module.css'

const getYesterday = (): Date => {
	const date = new Date()
	date.setDate(date.getDate() - 1)

	return date
}

const ActionBar = () => {
	const [searchDisabled, setSearchDisabled] = useState<boolean>(false)
	const [searchDate, setSearchDate] = useState<Date>(getYesterday())

	const getArticles = async (): Promise<void> => {
		try {
			setSearchDisabled(true)
			const results = await WikipediaApi.GetTopArticlesByDate({ date: searchDate })
			// const date = new Date(2023, 10, 9)
			// const results = await WikipediaApi.GetTopArticlesByDate({ date })
			const articles = results.items[0].articles
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
			<NumResultsDropdown />
			<SearchButton disabled={searchDisabled} />
		</form>
	)
}

export default ActionBar
