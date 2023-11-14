import { render, screen } from '@testing-library/react'
import SearchButton from './searchButton'

describe('SearchButton component', () => {
	test('renders the component', () => {
		render(<SearchButton disabled={false} />)
		const buttonElement = screen.getByRole('button')
		expect(buttonElement).toBeInTheDocument()
	})

	test('renders with disabled attribute when disabled is true', () => {
		render(<SearchButton disabled={true} />)
		const buttonElement = screen.getByRole('button')
		expect(buttonElement).toBeDisabled()
	})

	test('renders without disabled attribute when disabled is false', () => {
		render(<SearchButton disabled={false} />)
		const buttonElement = screen.getByRole('button')
		expect(buttonElement).not.toBeDisabled()
	})

	test('renders the correct text', () => {
		render(<SearchButton disabled={false} />)
		const textElement = screen.getByText('Search')
		expect(textElement).toBeInTheDocument()
	})

	test('matches snapshot', () => {
		const { asFragment } = render(<SearchButton disabled={false} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
