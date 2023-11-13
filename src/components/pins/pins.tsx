import ArticlesStore from '~/stores/articlesStore'
import ArticleItem from '../articleItem'
import styles from './styles.module.css'

const Pins = () => {
	const { pins } = ArticlesStore()

	if (pins.size === 0) return null

	return (
		<div className={styles.pins}>
			{[...pins].map((article, idx) => (
				<ArticleItem key={idx} article={article} isPin={true} />
			))}
		</div>
	)
}

export default Pins
