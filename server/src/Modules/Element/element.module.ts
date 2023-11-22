import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Element, ElementSchema } from 'src/Schemas/Element'

@Module({
	controllers: [],
	providers: [],
	imports: [
		MongooseModule.forFeature([
			{ name: Element.name, schema: ElementSchema },
		]),
	],
})
export class ElementModule {}
