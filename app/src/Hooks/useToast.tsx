import { useContext } from 'react'
import { ToastContext } from '../Service/ToastService'

const useToast = () => {
	const toast = useContext(ToastContext)

	return toast
}

export default useToast
