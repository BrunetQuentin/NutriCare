import { useContext } from 'react'
import { ApiServiceContext } from '../Service/ApiService'

const useApi = () => {
	const api = useContext(ApiServiceContext)

	return api
}

export default useApi
