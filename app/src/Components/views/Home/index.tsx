import Card, { CardStyle } from '../../Utils/Card'
import ContainerFluid from '../../Utils/ContainerFluid'
import './index.scss'

const Home = () => {
	return (
		<ContainerFluid>
			<Card
				title="Allo titlz"
				titleElement={<div>Je sui bieng</div>}
				className="col-xs-12"
			>
				5181 81
			</Card>
			<Card
				title="Allo titlz"
				titleElement={<div>Je sui bieng</div>}
				className="col-xs-12"
				style={CardStyle.PRIMARY}
			>
				5181 81
			</Card>
		</ContainerFluid>
	)
}

export default Home
