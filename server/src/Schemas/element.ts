import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ElementDocument = HydratedDocument<Element>

@Schema()
export class Element {
	@Prop()
	name: string

	@Prop()
	sources: string[]
}

export const ElementSchema = SchemaFactory.createForClass(Element)