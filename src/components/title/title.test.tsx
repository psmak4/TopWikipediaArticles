import { render, screen } from '@testing-library/react'
import Title from './title'

describe('Title component', () => {
	test('renders the component correctly', () => {
		render(<Title />)
		const titleElement = screen.getByText('Top Wikipedia articles')
		expect(titleElement).toBeInTheDocument()
		expect(titleElement).toHaveClass('title')
	})

	test('matches snapshot', () => {
		const { asFragment } = render(<Title />)
		expect(asFragment()).toMatchSnapshot()
	})
})
