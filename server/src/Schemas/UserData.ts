import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import Collections from 'src/Types/collections'
import { MongoDocument } from './MongoDocument'

export type UserDataDocument = HydratedDocument<UserData>

export class UserConsumption {
	@Prop()
	food: Types.ObjectId

	@Prop()
	quantity: number
}

@Schema({ collection: Collections.UserData })
export class UserData extends MongoDocument {
	@Prop()
	weight: number

	@Prop()
	height: number

	@Prop()
	bloodTest: Types.ObjectId[] // Future implementation

	@Prop()
	userConsumption: UserConsumption[]
}

export const UserDataSchema = SchemaFactory.createForClass(UserData)
