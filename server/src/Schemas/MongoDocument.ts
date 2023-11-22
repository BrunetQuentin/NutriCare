import { Schema } from '@nestjs/mongoose'
import { Types } from 'mongoose'

@Schema({
	id: false,
	timestamps: false,
})
export class MongoDocument {
	_id: Types.ObjectId
}
