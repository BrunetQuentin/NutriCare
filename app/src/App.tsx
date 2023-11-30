import { Route, Routes } from 'react-router-dom'
import ContentContainer from './Components/ContentContainer.tsx'
import Nav from './Components/Nav'
import Connect from './Components/views/Connect/index.tsx'
import Home from './Components/views/Home/index.tsx'
import './Styles/reset.scss'
import './Styles/root.scss'

const App = () => {
	return (
		<div className="app">
			<Nav />
			<ContentContainer>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/connect" element={<Connect />} />
				</Routes>
			</ContentContainer>
		</div>
	)
}

export default App
