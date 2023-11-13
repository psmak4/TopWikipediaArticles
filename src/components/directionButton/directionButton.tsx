import { MouseEvent } from 'react'
import ArticlesStore, { setCurrentPage } from '~/stores/articlesStore'
import styles from './styles.module.css'

interface DirectionButtonProps {
	direction: 'prev' | 'next'
}

const DirectionButton = ({ direction = 'prev' }: DirectionButtonProps) => {
	const { articles, currentPage, pageSize } = ArticlesStore()

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		if (direction === 'prev') {
			if (currentPage > 1) setCurrentPage(currentPage - 1)
		} else if (direction === 'next') {
			const numPages = Math.ceil(articles.length / pageSize)
			if (currentPage < numPages) setCurrentPage(currentPage + 1)
		}
	}

	const getPath = () => {
		if (direction === 'prev') {
			return 'M10.2339 13C10.4444 13 10.6316 12.933 10.7719 12.799C11.076 12.531 11.076 12.062 10.7719 11.794L6.81871 7.99721L10.7719 4.22278C11.076 3.95477 11.076 3.48576 10.7719 3.21776C10.4912 2.92741 10 2.92741 9.7193 3.21776L5.22807 7.50586C4.92398 7.77387 4.92398 8.24288 5.22807 8.51089L9.7193 12.799C9.85965 12.933 10.0468 13 10.2339 13Z'
		} else if (direction === 'next') {
			return 'M5.76608 13C5.55556 13 5.36842 12.933 5.22807 12.799C4.92398 12.531 4.92398 12.062 5.22807 11.794L9.18129 7.99721L5.22807 4.22278C4.92398 3.95477 4.92398 3.48576 5.22807 3.21776C5.50877 2.92741 6 2.92741 6.2807 3.21776L10.7719 7.50586C11.076 7.77387 11.076 8.24288 10.7719 8.51089L6.2807 12.799C6.14035 12.933 5.95322 13 5.76608 13Z'
		}
	}

	return (
		<button className={styles.directionButton} onClick={handleClick}>
			<span className={styles.icon}>
				<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
					<path d={getPath()} />
				</svg>
			</span>
		</button>
	)
}

export default DirectionButton
