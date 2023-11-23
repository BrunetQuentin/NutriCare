import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import Collections from 'src/Types/collections'
import { MongoDocument } from './MongoDocument'

export type ReferenceDocument = HydratedDocument<Reference>

@Schema({ collection: Collections.Reference })
export class Reference extends MongoDocument {
	@Prop()
	name: string

	@Prop()
	url: string
}

export const ReferenceSchema = SchemaFactory.createForClass(Reference)
