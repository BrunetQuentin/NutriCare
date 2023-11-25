import { Route, Routes } from 'react-router-dom'
import Connect from './Components/Connect'
import Nav from './Components/Nav'
import './Styles/reset.scss'
import './Styles/root.scss'

const App = () => {
	return (
		<div className="app">
			<Nav />
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/connect" element={<Connect />} />
			</Routes>
		</div>
	)
}

export default App
