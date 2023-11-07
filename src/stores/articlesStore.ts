import { create } from 'zustand'
import Article from '~/models/article'

interface ArticlesStoreState {
	articles: Article[]
}

const useStore = create<ArticlesStoreState>(() => ({
	articles: [],
}))

export const setArticles = (articles: Article[]) => useStore.setState({ articles })

const ArticlesStore = () => useStore(state => state)

export default ArticlesStore
