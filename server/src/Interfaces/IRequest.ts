import { Request } from 'express'
import { User } from 'src/Schemas/User'

interface IRequest extends Request {
	user: User
}

export default IRequest
