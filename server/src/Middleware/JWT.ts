import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Response } from 'express'
import IRequest from 'src/Interfaces/IRequest'
import { AuthService } from 'src/Modules/Auth/auth.service'

@Injectable()
export class JWTMiddleware implements NestMiddleware {
	constructor(private readonly authService: AuthService) {}

	async use(req: IRequest, res: Response, next: NextFunction) {
		// bring cookie from request
		const cookie = req.cookies?.token

		if (cookie) {
			const user = await this.authService.validateUser(cookie)

			// set user to request that will be used in controller
			req.user = user!
		}

		next()
	}
}
