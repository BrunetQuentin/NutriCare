import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import Collections from 'src/Types/collections'
import { MongoDocument } from './MongoDocument'
import { ScientificReferenceSchema } from './ScientificReference'

export type ElementDocument = HydratedDocument<Element>

export enum ElementTypes {
	GLUCID = 'GLUCID',
	PROTEIN = 'PROTEIN',
	LIPID = 'LIPID',
	VITAMIN = 'VITAMIN',
	MINERAL = 'MINERAL',
	FIBER = 'FIBER',
	ANTIOXIDANT = 'ANTIOXIDANT',
}

@Schema({ collection: Collections.Element })
export class Element extends MongoDocument {
	@Prop()
	name: string

	@Prop()
	image: string

	@Prop()
	description: string

	@Prop({
		enum: ElementTypes,
	})
	type: ElementTypes

	@Prop({
		type: [{ type: Types.ObjectId, ref: ScientificReferenceSchema }],
	})
	scientificReference: Types.ObjectId[]
}

export const ElementSchema = SchemaFactory.createForClass(Element)
