import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/Schemas/User'
import { UserService } from './user.service'

@Module({
	controllers: [],
	providers: [UserService],
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
	],
	exports: [UserService],
})
export class UserModule {}
