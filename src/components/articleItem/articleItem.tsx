import { MouseEvent } from 'react'
import pinSolid from '~/assets/pin-solid.png'
import pin from '~/assets/pin.png'
import Article from '~/models/article'
import { addPin, removePin } from '~/stores/articlesStore'
import styles from './styles.module.css'

interface ArticleItemProps {
	article: Article
	isPin?: boolean
	showRank?: boolean
}

const ArticleItem = ({ article, isPin = false, showRank = true }: ArticleItemProps) => {
	const getFormattedTitle = (title: string) => {
		return title.replaceAll('_', ' ')
	}

	const getFormattedViews = (views: number) => {
		const formatted = views.toLocaleString()

		return `${formatted} views`
	}

	const handlePinClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		if (isPin) removePin(article)
		else addPin(article)
	}

	return (
		<article className={styles.article}>
			{showRank && <div className={styles.rank}>{article.rank}</div>}
			<h2 className={styles.title}>{getFormattedTitle(article.article)}</h2>
			<div className={styles.views}>{getFormattedViews(article.views)}</div>
			<button className={styles.pin} onClick={handlePinClick}>
				{isPin && <img src={pinSolid} alt='Unpin this article' />}
				{!isPin && <img src={pin} alt='Pin this article' />}
			</button>
		</article>
	)
}

export default ArticleItem
