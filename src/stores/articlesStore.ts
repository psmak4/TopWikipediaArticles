import { create } from 'zustand'
import Article from '~/models/article'

const today = new Date()

interface ArticlesStoreState {
	articles: Article[]
	currentPage: number
	pageSize: number
	searchDate: Date
}

const useStore = create<ArticlesStoreState>(() => ({
	articles: [],
	currentPage: 1,
	pageSize: 100,
	searchDate: new Date(today.setDate(today.getDate() - 1)),
}))

export const setArticles = (articles: Article[]) => useStore.setState({ articles })

export const setPageSize = (pageSize: number) => useStore.setState({ pageSize })

export const setSearchDate = (searchDate: Date) => useStore.setState({ searchDate })

export const setCurrentPage = (currentPage: number) => useStore.setState({ currentPage })

const ArticlesStore = () => useStore(state => state)

export default ArticlesStore
