import {
	Controller,
	ForbiddenException,
	Get,
	Logger,
	Param,
} from '@nestjs/common'
import { IExemple } from 'common'
import { TestDtoDto } from '../../DTO/dto.dto'
import { AppService } from './app.service'

@Controller()
export class AppController {
	private readonly logger = new Logger(AppController.name)

	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): IExemple {
		return this.appService.getHello()
	}

	@Get('catch')
	getCatch(): IExemple {
		throw new ForbiddenException()
	}

	@Get('dto/:id')
	getDto(@Param() param: TestDtoDto): number {
		this.logger.log(param.id)

		return param.id
	}
}
