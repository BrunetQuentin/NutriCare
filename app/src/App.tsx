import { IExemple } from 'common'

const App = () => {
	const truc: IExemple = {
		name: 'toto',
		age: 12,
	}

	return (
		<div>
			<h1>{import.meta.env.VITE_SERVER_URL}</h1>
			{truc.name}
		</div>
	)
}

export default App
