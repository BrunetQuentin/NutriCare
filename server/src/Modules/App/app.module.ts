import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from '../../Configuration/EnvConfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['env/.env'],
			load: [configuration],
			isGlobal: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
