import { create } from 'zustand'
import Article from '~/models/article'

const today = new Date()

interface ArticlesStoreState {
	articles: Article[]
	currentPage: number
	pageSize: number
	pins: Set<Article>
	searchDate: Date
}

const useStore = create<ArticlesStoreState>(() => ({
	articles: [],
	currentPage: 1,
	pageSize: 100,
	pins: new Set<Article>(),
	searchDate: new Date(today.setDate(today.getDate() - 1)),
}))

export const setArticles = (articles: Article[]) => useStore.setState({ articles })

export const setCurrentPage = (currentPage: number) => useStore.setState({ currentPage })

export const setPageSize = (pageSize: number) => useStore.setState({ pageSize })

export const addPin = (article: Article) => {
	useStore.setState(prev => ({
		pins: new Set(prev.pins).add(article),
	}))
}

export const removePin = (article: Article) => {
	useStore.setState(prev => {
		const newPins = prev.pins
		newPins.delete(article)
		return {
			pins: newPins,
		}
	})
}

export const setSearchDate = (searchDate: Date) => useStore.setState({ searchDate })

const ArticlesStore = () => useStore(state => state)

export default ArticlesStore
