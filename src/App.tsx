import ActionBar from './components/actionBar'
import Card from './components/card'
import Navigation from './components/navigation'
import Page from './components/page'
import Title from './components/title'

const App = () => {
	return (
		<>
			<Navigation />
			<Page>
				<Title />
				<ActionBar />
				<Card />
			</Page>
		</>
	)
}

export default App
