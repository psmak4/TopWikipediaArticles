import { render, screen } from '@testing-library/react'
import Article from '~/models/article'
import ArticlesStore from '~/stores/articlesStore'
import Pins from './pins'

jest.mock('~/stores/articlesStore')
const mockArticlesStore = ArticlesStore as jest.MockedFunction<typeof ArticlesStore>
const mockCurrentPage = 1
const mockPageSize = 100
let mockPins = new Map<string, Article>()

describe('Pins', () => {
	beforeEach(() => {
		mockArticlesStore.mockImplementation(() => ({
			articles: [],
			currentPage: mockCurrentPage,
			pageSize: mockPageSize,
			pins: mockPins,
			searchDate: new Date(new Date().setDate(new Date().getDate() - 1)),
		}))
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('renders nothing when there are no pins', () => {
		render(<Pins />)

		const pinsElement = screen.queryByTestId('pins')
		expect(pinsElement).not.toBeInTheDocument()
	})

	test('renders pins when there are pins', () => {
		// Mock pins with some data
		mockPins = new Map([
			['key1', { article: 'Article 1', views: 100, rank: 1 }],
			['key2', { article: 'Article 2', views: 200, rank: 2 }],
		])

		render(<Pins />)

		const pinsElement = screen.queryByTestId('pins')
		expect(pinsElement).toBeInTheDocument()

		const articles = screen.getAllByRole('article')
		expect(articles.length).toBe(mockPins.size)
	})

	test('matches snapshot', () => {
		const { asFragment } = render(<Pins />)
		expect(asFragment()).toMatchSnapshot()
	})
})
