import ActionBar from './components/actionBar'
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
			</Page>
		</>
	)
}

export default App
