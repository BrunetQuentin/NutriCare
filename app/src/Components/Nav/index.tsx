import {
	faBowlFood,
	faDirections,
	faFileInvoiceDollar,
	faHome,
	faUserAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../../../public/logo.svg?react'
import NavElement from './NavElement.tsx'
import './index.scss'

const links = [
	{
		id: 0,
		name: 'Home',
		path: '',
		icon: faHome,
	},
	{
		id: 1,
		name: 'Aliment',
		path: 'aliment',
		icon: faBowlFood,
	},
	{
		id: 2,
		name: 'Complement',
		path: 'complement',
		icon: faFileInvoiceDollar,
	},
	{
		id: 3,
		name: 'Use cases',
		path: 'cases',
		icon: faUserAlt,
	},
	{
		id: 4,
		name: 'Your diet',
		path: 'diet',
		icon: faDirections,
	},
]

const Nav = () => {
	const refActive = useRef<SVGSVGElement>(null)

	const { pathname } = useLocation()

	const active = useMemo(() => {
		const split = pathname.split('/')
		return split[1]
	}, [pathname])

	useEffect(() => {
		recalculActive()
		window.addEventListener('resize', recalculActive)
		return () => {
			window.removeEventListener('resize', recalculActive)
		}
	}, [active])

	const recalculActive = () => {
		const activeLink = links.find((link) => link.path === active)

		if (!activeLink) return

		const activeElement = document.getElementById(activeLink?.id.toString())

		if (!activeElement) return
		const { top } = activeElement.getBoundingClientRect()
		refActive.current!.style.top = top - 50 + 'px'
	}

	return (
		<nav className="nav">
			<div className="nav-logo">
				<Logo />
			</div>
			<div className="nav-links">
				<svg
					ref={refActive}
					className="nav-links-active"
					viewBox="0 0 3 17"
				>
					<path d="M 0 0 Q 0 1 2 3 Q 3 4 3 5 V 12 Q 3 13 2 14 Q 0 16 0 17 Z" />
				</svg>
				{links.map((link) => {
					return (
						<NavElement
							active={active}
							icon={link.icon}
							id={link.id}
							name={link.name}
							path={link.path}
						/>
					)
				})}
			</div>
		</nav>
	)
}
export default Nav
