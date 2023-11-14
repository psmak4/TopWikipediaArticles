/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react'
import Article from '~/models/article'
import ArticlesStore, { setCurrentPage, setPageSize } from '~/stores/articlesStore'
import DropdownList, { numResultsOptions } from './dropdownList'

jest.mock('~/stores/articlesStore')
const mockArticlesStore = ArticlesStore as jest.MockedFunction<typeof ArticlesStore>
const mockSetCurrentPage = setCurrentPage as jest.MockedFunction<typeof setCurrentPage>
const mockSetPageSize = setPageSize as jest.MockedFunction<typeof setPageSize>
const mockCurrentPage = 1
const mockPageSize = 100

const mockOnChange = jest.fn()

describe('DropdownList component', () => {
	beforeEach(() => {
		mockArticlesStore.mockImplementation(() => ({
			articles: [],
			currentPage: mockCurrentPage,
			pageSize: mockPageSize,
			pins: new Map<string, Article>(),
			searchDate: new Date(new Date().setDate(new Date().getDate() - 1)),
		}))
		mockSetCurrentPage.mockImplementation(_ => void 0)
		mockSetPageSize.mockImplementation(_ => void 0)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('renders the component with options', () => {
		render(<DropdownList />)
		const dropdownListElement = screen.getByRole('list')
		expect(dropdownListElement).toBeInTheDocument()

		// Check if options are rendered
		numResultsOptions.forEach(option => {
			const optionButton = screen.getByText(option.toString())
			expect(optionButton).toBeInTheDocument()
		})
	})

	test('handles click on an option', () => {
		render(<DropdownList onChange={mockOnChange} />)
		const optionButton = screen.getByText(numResultsOptions[0].toString())

		fireEvent.click(optionButton)

		// Check if setPageSize is called with the correct value
		expect(mockSetPageSize).toHaveBeenCalledWith(numResultsOptions[0])

		// Check if setCurrentPage is called with the correct value
		expect(mockSetCurrentPage).toHaveBeenCalledWith(0) // expecting 0 since there are no articles to display

		// Check if onChange is called
		expect(mockOnChange).toHaveBeenCalled()
	})

	test('matches snapshot', () => {
		const { asFragment } = render(<DropdownList />)
		expect(asFragment()).toMatchSnapshot()
	})
})
