import {
	faCircleCheck,
	faCircleExclamation,
	faCircleInfo,
	faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement, createContext, useMemo, useState } from 'react'
import '../Styles/toast.scss'

interface IToastContext {
	addToast: (toast: IToast) => void
}

export enum ToastType {
	SUCCESS = 'success',
	ERROR = 'error',
	INFO = 'info',
	WARNING = 'warning',
}

export interface IToast {
	type: ToastType
	message: string
	title?: string
	duration?: number
	id?: string
}

export const ToastContext = createContext<IToastContext>({
	addToast: () => {},
})

const ToastService = ({ children }: { children: ReactElement }) => {
	const [toasts, setToasts] = useState<IToast[]>([])

	const addToast = (toast: IToast) => {
		if (!toast.id) {
			toast.id = Math.random().toString()
		}

		if (!toast.duration) {
			toast.duration = 5
		}

		setToasts((prevToasts) => {
			return [...prevToasts, toast]
		})

		setTimeout(() => {
			setToasts((prevToasts) => prevToasts.filter((t) => t !== toast))
		}, toast.duration * 1000 + 500)
	}

	const context = {
		addToast,
	}

	const toastsElement = useMemo(() => {
		return toasts.map((toast) => (
			<div
				key={toast.id}
				className={`toast ${toast.type}`}
				style={{
					animation: `toast-in 0.2s ease-in-out 0s, 
					toast-out 0.2s ease-in-out ${toast.duration! - 0.2}s forwards,
					toast-shrink 0.2s linear ${toast.duration!}s forwards`,
				}}
			>
				<div className="toast-icon">
					<FontAwesomeIcon
						icon={
							{
								[ToastType.SUCCESS]: faCircleCheck,
								[ToastType.ERROR]: faCircleXmark,
								[ToastType.INFO]: faCircleInfo,
								[ToastType.WARNING]: faCircleExclamation,
							}[toast.type]
						}
					/>
				</div>
				<div className="toast-body">
					<div className="toast-title">{toast.title}</div>
					<div className="toast-message">{toast.message}</div>
				</div>
			</div>
		))
	}, [toasts])

	return (
		<ToastContext.Provider value={context}>
			<div className="toasts">{toastsElement}</div>
			{children}
		</ToastContext.Provider>
	)
}

export default ToastService
