import Article from '~/models/article'
import styles from './styles.module.css'

interface ArticleItemProps {
	article: Article
}

const ArticleItem = ({ article }: ArticleItemProps) => {
	const getFormattedTitle = (title: string) => {
		return title.replaceAll('_', ' ')
	}

	const getFormattedViews = (views: number) => {
		const formatted = views.toLocaleString()

		return `${formatted} views`
	}

	return (
		<article className={styles.article}>
			<div className={styles.rank}>{article.rank}</div>
			<h2 className={styles.title}>{getFormattedTitle(article.article)}</h2>
			<div className={styles.views}>{getFormattedViews(article.views)}</div>
		</article>
	)
}

export default ArticleItem
