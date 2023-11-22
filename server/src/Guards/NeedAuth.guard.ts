import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'

@Injectable()
export class NeedAuthGuard implements CanActivate {
	constructor() {}

	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest()

		if (!request?.raw?.user) {
			throw new UnauthorizedException()
		} else {
			return true
		}
	}
}
