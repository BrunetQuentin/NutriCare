import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import Collections from 'src/Types/collections'
import { MongoDocument } from './MongoDocument'

export type ScientificReferenceDocument = HydratedDocument<ScientificReference>

@Schema({ collection: Collections.ScientificReference })
export class ScientificReference extends MongoDocument {
	@Prop()
	name: string

	@Prop()
	url: string

	@Prop()
	by: string[]
}

export const ScientificReferenceSchema =
	SchemaFactory.createForClass(ScientificReference)
