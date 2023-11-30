import './index.scss'

interface ContainerFluidProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const ContainerFluid = ({ children, ...divProps }: ContainerFluidProps) => {
	return (
		<div {...divProps} className={'container-fluid ' + divProps.className}>
			{children}
		</div>
	)
}

export default ContainerFluid
