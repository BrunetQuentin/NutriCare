import { IsNumberString } from 'class-validator'

export class TestDtoDto {
	@IsNumberString()
	id: number
}
