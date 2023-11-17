import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { HttpExceptionFilter } from './Middleware/http-exception.filter'
import { AppModule } from './Modules/App/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.useGlobalFilters(new HttpExceptionFilter())

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			exceptionFactory: (errors) =>
				new HttpException(
					errors
						.map((e) => Object.values(e.constraints!).join(', '))
						.join(', '),
					HttpStatus.BAD_REQUEST,
				),
		}),
	)

	const port: number = app.get(ConfigService).get('port')
	await app.listen(port)
}
bootstrap()
