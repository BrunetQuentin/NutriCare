import Button from '../../Button'
import Input, { InputStyle } from '../../Utils/Input'
import './index.scss'

const Connect = () => {
	return (
		<div className="connect">
			<div className="connect-content">
				<div>
					<form>
						<h4>Connect</h4>
						<Input
							name="Email"
							label="Email"
							type="email"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Input
							name="Password"
							label="Password"
							type="password"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Button>
							<div>Connect</div>
						</Button>
					</form>
				</div>
				<div>
					<form>
						<h4>Register</h4>
						<Input
							name="Email"
							label="Email"
							inputStyle={InputStyle.OUTLINE}
							type="email"
						/>
						<Input
							name="Pseudo"
							label="Pseudo"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Input
							name="Password"
							label="Password"
							type="password"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Button>
							<div>Register</div>
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Connect
