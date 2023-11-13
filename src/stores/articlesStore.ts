import { create } from 'zustand'
import Article from '~/models/article'

const PINS_LS = 'Pinned Articles'

const loadPins = (): Map<string, Article> => {
	const str = localStorage.getItem(PINS_LS)
	if (str === null) return new Map<string, Article>()

	const arr = JSON.parse(str)
	if (!Array.isArray(arr)) return new Map<string, Article>()

	const pins = new Map<string, Article>()
	arr.forEach(([key, value]) => {
		pins.set(key, value)
	})

	return pins
}

interface ArticlesStoreState {
	articles: Article[]
	currentPage: number
	pageSize: number
	pins: Map<string, Article>
	searchDate: Date
}

const useStore = create<ArticlesStoreState>(() => ({
	articles: [],
	currentPage: 1,
	pageSize: 100,
	pins: loadPins(),
	searchDate: new Date(new Date().setDate(new Date().getDate() - 1)),
}))

export const setArticles = (articles: Article[]) => useStore.setState({ articles })

export const setCurrentPage = (currentPage: number) => useStore.setState({ currentPage })

export const setPageSize = (pageSize: number) => useStore.setState({ pageSize })

export const addPin = (article: Article) => {
	useStore.setState(prev => {
		const key = JSON.stringify(article)
		if (prev.pins.has(key)) return prev

		const newPins = prev.pins
		newPins.set(key, article)

		localStorage.setItem(PINS_LS, JSON.stringify([...newPins]))

		return {
			pins: newPins,
		}
	})
}

export const removePin = (article: Article) => {
	useStore.setState(prev => {
		const key = JSON.stringify(article)
		if (!prev.pins.has(key)) return prev

		const newPins = prev.pins
		newPins.delete(key)

		localStorage.setItem(PINS_LS, JSON.stringify([...newPins]))

		return {
			pins: newPins,
		}
	})
}

export const setSearchDate = (searchDate: Date) => useStore.setState({ searchDate })

const ArticlesStore = () => useStore(state => state)

export default ArticlesStore
