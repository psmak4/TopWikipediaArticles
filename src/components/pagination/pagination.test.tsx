/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react'
import Article from '~/models/article'
import ArticlesStore, { setCurrentPage } from '~/stores/articlesStore'
import Pagination from './pagination'

jest.mock('~/stores/articlesStore')
const mockArticlesStore = ArticlesStore as jest.MockedFunction<typeof ArticlesStore>
const mockSetCurrentPage = setCurrentPage as jest.MockedFunction<typeof setCurrentPage>
const mockCurrentPage = 1
const mockPageSize = 1
const mockArticles: Article[] = [
	{
		article: 'one',
		views: 1,
		rank: 1,
	},
	{
		article: 'two',
		views: 2,
		rank: 2,
	},
	{
		article: 'three',
		views: 3,
		rank: 3,
	},
]

describe('Pagination', () => {
	beforeEach(() => {
		mockArticlesStore.mockImplementation(() => ({
			articles: mockArticles,
			currentPage: mockCurrentPage,
			pageSize: mockPageSize,
			pins: new Map<string, Article>(),
			searchDate: new Date(new Date().setDate(new Date().getDate() - 1)),
		}))
		mockSetCurrentPage.mockImplementation(_ => void 0)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('renders pagination buttons', () => {
		render(<Pagination />)

		// Check if the Pagination component renders the expected number of buttons
		const pageButtons = screen.getAllByRole('button')
		expect(pageButtons).toHaveLength(5) // prev, 1, 2, 3, next

		// Check if the buttons are rendered correctly
		for (let i = 1; i < pageButtons.length - 1; i++) {
			const button = pageButtons[i]
			expect(button).toHaveTextContent(i.toString())
		}

		// Check if the current page button is disabled
		const currentPageButton = pageButtons[1]
		expect(currentPageButton).toHaveAttribute('disabled')
	})

	test('calls setCurrentPage when a page button is clicked', () => {
		render(<Pagination />)

		// Click on a page button
		const pageButton = screen.getByText('2')
		fireEvent.click(pageButton)

		// Check if setCurrentPage is called with the correct argument
		expect(mockSetCurrentPage).toHaveBeenCalledWith(2)
	})

	test('matches snapshot', () => {
		const { asFragment } = render(<Pagination />)
		expect(asFragment()).toMatchSnapshot()
	})
})
