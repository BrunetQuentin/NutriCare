import './index.scss'

export enum CardStyle {
	DEFAULT = 'default',
	PRIMARY = 'primary',
}

interface CardProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
	children: React.ReactNode
	title?: string
	titleElement?: React.ReactNode
	style?: CardStyle
}

const Card = ({
	title,
	titleElement,
	children,
	style = CardStyle.DEFAULT,
	...divProps
}: CardProps) => {
	return (
		<div
			{...divProps}
			className={'card ' + divProps.className + ' ' + style}
		>
			<div className="card-header">
				{title && <div className="card-title">{title}</div>}
				{titleElement && titleElement}
			</div>
			<div>{children}</div>
		</div>
	)
}

export default Card
