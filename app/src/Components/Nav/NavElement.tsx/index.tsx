import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, LinkProps } from 'react-router-dom'
import './index.scss'

interface NavElementProps extends Omit<LinkProps, 'id' | 'to'> {
	id: number
	name: string
	path?: string
	icon: IconDefinition
	active: string
}

const NavElement = ({
	name,
	icon,
	active,
	path,
	id,
	...LinkProps
}: NavElementProps) => {
	return (
		<Link
			{...LinkProps}
			id={id.toString()}
			to={path || ''}
			className={'nav-element ' + (active === path ? 'active' : '')}
		>
			<FontAwesomeIcon icon={icon} />
			<p>{name}</p>
		</Link>
	)
}

export default NavElement
