import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filter/http-exception.filter'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.useGlobalFilters(new HttpExceptionFilter())

	const port: number = app.get(ConfigService).get('port')
	await app.listen(port)
}
bootstrap()
