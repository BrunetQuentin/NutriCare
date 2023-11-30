import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NewPin from '../Utils/NewPin'
import './index.scss'

interface ContentContainerProps {
	children: React.ReactNode
}

const ContentContainer = ({ children }: ContentContainerProps) => {
	return (
		<div className="content-container">
			<div className="user-info">
				<NewPin hasNewPin={true} right={5} top={2}>
					<FontAwesomeIcon icon={faMessage} />
				</NewPin>
				<NewPin hasNewPin={true} right={8} top={12}>
					<FontAwesomeIcon icon={faBell} />
				</NewPin>
				<img src="https://picsum.photos/200" alt="user" />
			</div>
			<div className="main-content">{children}</div>
		</div>
	)
}

export default ContentContainer
