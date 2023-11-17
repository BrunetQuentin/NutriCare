import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const port: number = app.get(ConfigService).get('port')

	await app.listen(port)
}
bootstrap()