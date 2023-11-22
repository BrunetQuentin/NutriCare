import { IsEmail, IsString } from 'class-validator'

export class LoginBodyDto {
	@IsEmail()
	email: string

	@IsString()
	password: string
}

export class RegisterBodyDto {
	@IsEmail()
	email: string

	@IsString()
	pseudo: string

	@IsString()
	password: string
}
