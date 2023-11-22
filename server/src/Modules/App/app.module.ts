import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import configuration from '../../Configuration/EnvConfig'
import { AuthModule } from '../Auth/auth.module'
import { ElementModule } from '../Element/element.module'
import { UserModule } from '../User/user.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['env/.env'],
			load: [configuration],
			isGlobal: true,
		}),
		MongooseModule.forRootAsync({
			useFactory: async (configService: ConfigService) => ({
				uri: `mongodb://${configService.get(
					'database.host',
				)}:${configService.get('database.port')}/${configService.get(
					'database.name',
				)}`,
			}),
			inject: [ConfigService],
		}),
		ElementModule,
		UserModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
