import { create } from 'zustand'
import Article from '~/models/article'

interface ArticlesStoreState {
	articles: Article[]
	currentPage: number
	pageSize: number
}

const useStore = create<ArticlesStoreState>(() => ({
	articles: [],
	currentPage: 1,
	pageSize: 100,
}))

export const setArticles = (articles: Article[]) => useStore.setState({ articles })

export const setPageSize = (pageSize: number) => useStore.setState({ pageSize })

export const setCurrentPage = (currentPage: number) => useStore.setState({ currentPage })

const ArticlesStore = () => useStore(state => state)

export default ArticlesStore
