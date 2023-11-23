import { Prop, Schema } from '@nestjs/mongoose'
import { Types } from 'mongoose'

@Schema({
	id: false,
	timestamps: false,
})
export class MongoDocument {
	@Prop()
	_id: Types.ObjectId
}
