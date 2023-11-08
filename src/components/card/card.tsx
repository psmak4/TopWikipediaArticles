import Article from '~/components/articleItem'
import ArticlesStore from '~/stores/articlesStore'
import styles from './styles.module.css'

const Card = () => {
	const { articles } = ArticlesStore()

	return (
		<div className={styles.card}>
			{articles.map((article, idx) => (
				<Article key={idx} article={article} />
			))}
		</div>
	)
}

export default Card
