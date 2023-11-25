import { ReactElement } from 'react'
import './index.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactElement | string
}

const Button = ({ children, ...buttomProps }: ButtonProps) => {
	buttomProps.className = 'button'

	return <button {...buttomProps}>{children}</button>
}

export default Button
