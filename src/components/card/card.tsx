import { useEffect, useState } from 'react'
import ArticleItem from '~/components/articleItem'
import Article from '~/models/article'
import ArticlesStore from '~/stores/articlesStore'
import styles from './styles.module.css'

const Card = () => {
	const { articles, currentPage, pageSize, pins } = ArticlesStore()
	const [pagedArticles, setPagedArticles] = useState<Array<Article>>([])

	const isPin = (article: Article) => {
		const key = JSON.stringify(article)
		return pins.has(key)
	}

	useEffect(() => {
		const end = currentPage * pageSize
		const start = end - pageSize
		const page = articles.slice(start, end)
		setPagedArticles(page)
	}, [articles, currentPage, pageSize])

	return (
		<div className={styles.card}>
			{pagedArticles.map((article, idx) => (
				<ArticleItem key={idx} article={article} isPin={isPin(article)} />
			))}
		</div>
	)
}

export default Card
