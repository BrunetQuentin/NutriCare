import { IExemple } from 'common'

const App = () => {
	const truc: IExemple = {
		name: 'toto',
		age: 12,
	}

	return (
		<div>
			Inclu App
			<h1>{process.env.VITE_SERVER_URL}</h1>
			{truc.name}
		</div>
	)
}

export default App
