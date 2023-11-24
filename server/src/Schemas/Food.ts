import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import Collections from 'src/Types/collections'
import { MongoDocument } from './MongoDocument'

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
		type: [{ type: Types.ObjectId, ref: Collections.Element }],
	})
	elements: Types.ObjectId[]

	@Prop({
		type: [{ type: Types.ObjectId, ref: Collections.Reference }],
	})
	reference: Types.ObjectId[]

	@Prop({
		type: [{ type: Types.ObjectId, ref: Collections.ScientificReference }],
	})
	scientificReference: Types.ObjectId[]
}

export const FoodSchema = SchemaFactory.createForClass(Food)
