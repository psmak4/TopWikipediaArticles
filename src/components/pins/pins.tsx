import ArticlesStore from '~/stores/articlesStore'
import ArticleItem from '../articleItem'
import styles from './styles.module.css'

const Pins = () => {
	const { pins } = ArticlesStore()

	if (pins.size === 0) return null

	return (
		<div className={styles.pins}>
			{[...pins].map((value, idx) => (
				<ArticleItem key={idx} article={value[1]} isPin={true} showRank={false} />
			))}
		</div>
	)
}

export default Pins
