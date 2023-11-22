import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import Collections from 'src/Types/collections'

export type ElementDocument = HydratedDocument<Element>

@Schema({ collection: Collections.Element })
export class Element {
	@Prop()
	name: string

	@Prop()
	sources: string[]
}

export const ElementSchema = SchemaFactory.createForClass(Element)
