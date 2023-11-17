import { Injectable } from '@nestjs/common'
import { IExemple } from 'common'

@Injectable()
export class AppService {
	getHello(): IExemple {
		return {
			age: 20,
			name: 'John Doe',
		}
	}
}
