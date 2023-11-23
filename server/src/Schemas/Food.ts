import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import Collections from 'src/Types/collections'
import { ElementSchema } from './Element'
import { MongoDocument } from './MongoDocument'
import { ReferenceSchema } from './Reference'
import { ScientificReferenceSchema } from './ScientificReference'

export type FoodDocument = HydratedDocument<Food>

@Schema({ collection: Collections.Food })
export class Food extends MongoDocument {
	@Prop()
	name: string

	@Prop()
	image: string

	@Prop()
	descriptionKey: string

	@Prop({
		type: [{ type: Types.ObjectId, ref: ElementSchema }],
	})
	elements: Types.ObjectId[]

	@Prop({
		type: [{ type: Types.ObjectId, ref: ReferenceSchema }],
	})
	reference: Types.ObjectId[]

	@Prop({
		type: [{ type: Types.ObjectId, ref: ScientificReferenceSchema }],
	})
	scientificReference: Types.ObjectId[]
}

export const FoodSchema = SchemaFactory.createForClass(Food)
