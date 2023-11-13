import ActionBar from '~/components/actionBar'
import Card from '~/components/card'
import Navigation from '~/components/navigation'
import Page from '~/components/page'
import Pagination from '~/components/pagination'
import Title from '~/components/title'
import Pins from './components/pins'

const App = () => {
	return (
		<>
			<Navigation />
			<Page>
				<Title />
				<ActionBar />
				<Pins />
				<Card />
				<Pagination />
			</Page>
		</>
	)
}

export default App
