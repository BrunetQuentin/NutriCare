import axios, { AxiosInstance } from 'axios'
import React, { ReactElement } from 'react'
import useToast from '../Hooks/useToast'
import { ToastType } from './ToastService'

interface IApiContext {
	api: AxiosInstance
}

export const ApiServiceContext = React.createContext<IApiContext>({
	api: axios.create(),
})

const ApiService = ({ children }: { children: ReactElement }) => {
	const { addToast } = useToast()

	const api = axios.create({
		baseURL: import.meta.env.VITE_SERVER_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	})

	api.interceptors.request.use(
		(config) => {
			return config
		},
		(error) => {
			addToast({
				message: error,
				type: ToastType.ERROR,
				title: 'Erreur:',
			})
			return Promise.reject(error)
		},
	)

	const context: IApiContext = {
		api,
	}

	return (
		<ApiServiceContext.Provider value={context}>
			{children}
		</ApiServiceContext.Provider>
	)
}

export default ApiService
