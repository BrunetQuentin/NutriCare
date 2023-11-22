import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { JWTMiddleware } from 'src/Middleware/JWT'
import { UserModule } from '../User/user.module'
import { AuthService } from './auth.service'

@Module({
	controllers: [],
	providers: [AuthService],
	imports: [UserModule],
})
export class AuthModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(JWTMiddleware)
			.exclude({ path: '/auth/*', method: RequestMethod.ALL })
			.forRoutes('*')
	}
}
