import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ApiService from './Service/ApiService.tsx'
import ToastService from './Service/ToastService.tsx'
import './Styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ToastService>
		<ApiService>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ApiService>
	</ToastService>,
)
