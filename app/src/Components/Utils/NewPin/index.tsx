import './index.scss'

interface NewPinProps {
	children: React.ReactNode
	hasNewPin: boolean
	top?: number
	right?: number
}

const NewPin = ({ top, right, hasNewPin, children }: NewPinProps) => {
	return (
		<div className="new-pin">
			{hasNewPin && (
				<div
					className="pin"
					style={{
						top: top || 0,
						right: right || 0,
					}}
				></div>
			)}
			{children}
		</div>
	)
}

export default NewPin
