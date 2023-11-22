import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { User } from 'src/Schemas/User'
import { UserService } from '../User/user.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly configService: ConfigService,
		private readonly userService: UserService,
	) {}

	async register(email: string, pseudo: string, password: string) {
		const user = await this.userService.getUser({ email })

		if (user) {
			return null
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		await this.userService.createUser(email, pseudo, hashedPassword)

		return true
	}

	async login(email: string, password: string) {
		const user = await this.userService.getUser({ email })

		if (!user) {
			return null
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		if (user.password !== hashedPassword) {
			return null
		}

		const token = await this.createToken(user)

		return token
	}

	async createToken(user: User) {
		const dataToBeSavedInJwt = {
			_id: user._id,
			password: user.password,
			loginAt: new Date(Date.now()),
		}

		// create jwt token
		const token = jwt.sign(
			dataToBeSavedInJwt,
			this.configService.get('jwt.secret') as string,
			{
				expiresIn: this.configService.get('jwt.expire'),
			},
		)

		return token
	}

	async validateUser(token: string): Promise<User | null> {
		let decoded: {
			_id: string
			password: string
			loginAt: Date
		}
		try {
			decoded = jwt.verify(
				token,
				this.configService.get('jwt.tokenSecret') as string,
			) as any
		} catch (err) {
			return null
		}

		const user = await this.userService.getUser({
			_id: decoded._id,
		})

		if (!user) return null

		if (user.password !== decoded.password) {
			return null
		}

		if (user.lastLogout > decoded.loginAt) {
			return null
		}

		return user
	}
}
