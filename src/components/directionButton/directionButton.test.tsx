/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react'
import Article from '~/models/article'
import ArticlesStore, { setCurrentPage } from '~/stores/articlesStore'
import DirectionButton from './directionButton'

jest.mock('~/stores/articlesStore')
const mockArticlesStore = ArticlesStore as jest.MockedFunction<typeof ArticlesStore>
const mockSetCurrentPage = setCurrentPage as jest.MockedFunction<typeof setCurrentPage>
let mockCurrentPage = 1
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

describe('DirectionButton', () => {
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

	test('renders the button with the correct class', () => {
		render(<DirectionButton direction='prev' />)

		const button = screen.getByRole('button')
		expect(button).toHaveClass('directionButton')
	})

	test('calls setCurrentPage with the correct value when clicking "prev"', () => {
		mockCurrentPage = 2

		render(<DirectionButton direction='prev' />)

		const button = screen.getByRole('button')

		fireEvent.click(button)

		expect(mockSetCurrentPage).toHaveBeenCalledWith(1)
	})

	test('calls setCurrentPage with the correct value when clicking "next"', () => {
		mockCurrentPage = 2

		render(<DirectionButton direction='next' />)

		const button = screen.getByRole('button')

		fireEvent.click(button)

		expect(setCurrentPage).toHaveBeenCalledWith(3)
	})

	test('matches snapshot', () => {
		const { asFragment } = render(<DirectionButton direction={'prev'} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
