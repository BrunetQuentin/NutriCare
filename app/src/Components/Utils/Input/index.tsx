import './index.scss'

export enum InputStyle {
	OUTLINE = 'outline',
	STANDARD = 'standard',
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	inputStyle?: InputStyle
	name: string
}

const Input = ({
	label,
	inputStyle = InputStyle.STANDARD,
	name,
	...inputProps
}: InputProps) => {
	return (
		<div
			className={
				inputStyle === InputStyle.OUTLINE
					? 'outlined-input'
					: 'standard-input'
			}
		>
			<input name={name} {...inputProps} placeholder=" " />
			<label htmlFor={name}>{label}</label>
			{inputStyle === InputStyle.STANDARD && (
				<span className="underline"></span>
			)}
		</div>
	)
}

export default Input
