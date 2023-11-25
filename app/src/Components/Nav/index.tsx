import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useMemo, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button'
import './index.scss'

const links = [
	{
		id: 1,
		name: 'Aliment',
		path: 'aliment',
	},
	{
		id: 2,
		name: 'Complement',
		path: 'complement',
	},
	{
		id: 3,
		name: 'use case',
		path: 'cases',
	},
	{
		id: 4,
		name: 'Your diet',
		path: 'diet',
	},
]

const Nav = () => {
	const refUnderline = useRef<HTMLDivElement>(null)

	const { pathname } = useLocation()

	const active = useMemo(() => {
		const split = pathname.split('/')
		return split[1]
	}, [pathname])

	useEffect(() => {
		recalculUnderline()
		window.addEventListener('resize', recalculUnderline)
		return () => {
			window.removeEventListener('resize', recalculUnderline)
		}
	}, [active])

	const recalculUnderline = () => {
		const activeLink = links.find((link) => link.path === active)

		if (!activeLink) return
		const activeElement = document.getElementById(activeLink?.id.toString())

		if (!activeElement) return

		// get the mesure of the active element
		const width = activeElement.clientWidth
		const left = activeElement.offsetLeft

		// set the mesure to the underline
		refUnderline.current!.style.width = `${width}px`
		refUnderline.current!.style.left = `${left}px`
	}

	return (
		<nav className="nav">
			<div className="nav-logo">
				<h1>Nutricare</h1>
			</div>
			<div className="nav-links">
				<div className="nav-links-underline" ref={refUnderline}></div>
				{links.map((link) => {
					return (
						<Link
							key={'link-' + link.id}
							id={link.id.toString()}
							to={link.path}
						>
							{link.name}
						</Link>
					)
				})}
			</div>
			<div className="nav-btn">
				<FontAwesomeIcon icon={faSearch} />
				<Link to="/connect">
					<Button>Sign in</Button>
				</Link>
			</div>
		</nav>
	)
}
export default Nav
