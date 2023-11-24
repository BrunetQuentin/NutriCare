import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ToastService from './Service/ToastService.tsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ToastService>
		<App />
	</ToastService>,
)
