import { Controller, ForbiddenException, Get } from '@nestjs/common'
import { IExemple } from 'common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): IExemple {
		return this.appService.getHello()
	}

	@Get('catch')
	getCatch(): IExemple {
		throw new ForbiddenException()
	}
}
