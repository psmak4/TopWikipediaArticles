import { create } from 'zustand'
import Article from '~/models/article'

interface ArticlesStoreState {
	articles: Article[]
	pageSize: number
}

const useStore = create<ArticlesStoreState>(() => ({
	articles: [],
	pageSize: 100,
}))

export const setArticles = (articles: Article[]) => useStore.setState({ articles })

export const setPageSize = (pageSize: number) => useStore.setState({ pageSize })

const ArticlesStore = () => useStore(state => state)

export default ArticlesStore
