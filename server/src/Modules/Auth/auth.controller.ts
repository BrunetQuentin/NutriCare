import { Body, Controller, Get, Logger, Post, Req } from '@nestjs/common'
import IRequest from 'src/Interfaces/IRequest'
import { LoginBodyDto, RegisterBodyDto } from './auth.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
	private readonly logger = new Logger(AuthController.name)

	constructor(private readonly authService: AuthService) {}

	@Post('login')
	async login(@Body() body: LoginBodyDto) {
		this.logger.log(`Call login with email: ${body.email}`)

		const token = await this.authService.login(body.email, body.password)
		return token
	}

	@Post('register')
	async register(@Body() body: RegisterBodyDto) {
		this.logger.log(`Call register with email: ${body.email}`)

		const success = await this.authService.register(
			body.email,
			body.pseudo,
			body.password,
		)
		return success
	}

	@Get('me')
	async me(@Req() req: IRequest) {
		this.logger.log(`Call me`)

		return req.user
	}
}
