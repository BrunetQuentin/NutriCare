import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import Collections from 'src/Types/collections'
import { MongoDocument } from './MongoDocument'

export type UserDocument = HydratedDocument<User>

@Schema({ collection: Collections.User })
export class User extends MongoDocument {
	@Prop()
	username: string

	@Prop({
		select: false,
	})
	password: string

	@Prop()
	email: string

	@Prop()
	role: string

	@Prop()
	lastLogout: Date

	@Prop({
		type: Types.ObjectId,
		ref: Collections.UserData,
	})
	userData: Types.ObjectId
}

export const UserSchema = SchemaFactory.createForClass(User)
