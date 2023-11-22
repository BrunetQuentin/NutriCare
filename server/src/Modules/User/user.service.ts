import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import { FilterQuery, Model, Types } from 'mongoose'
import { User } from 'src/Schemas/User'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>,
	) {}

	async getUser(
		filter: FilterQuery<User>,
		select = '',
	): Promise<User | null> {
		return await this.userModel
			.findOne(filter, select)
			.select(select)
			.lean()
			.exec()
	}

	async createUser(
		email: string,
		pseudo: string,
		password = '',
	): Promise<User> {
		// hash password with bcrypt
		let hashedPassword
		if (password) hashedPassword = await bcrypt.hash(password, 10)

		const newUser = new this.userModel({
			email: email,
			username: pseudo,
			file: new Types.ObjectId(),
			password: hashedPassword,
		})
		return await newUser.save()
	}
}
