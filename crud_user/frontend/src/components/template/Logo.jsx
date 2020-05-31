import './Logo.css'
import React from 'react'
import logo from '../../assets/images/logo192.png'
import { Link } from 'react-router-dom'

export default props => {
	return(
		<aside className="logo">
			<Link to="/" className="logo">
				<img src={logo} alt="Logo"/>
			</Link>
		</aside>
	)
}