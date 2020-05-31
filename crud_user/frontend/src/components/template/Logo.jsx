import './Logo.css'
import React from 'react'
import logo from '../../assets/images/logo192.png'

export default props => {
	return(
		<aside className="logo">
			<a href="/" className="logo">
				<img src={logo} alt="Logo"/>
			</a>
		</aside>
	)
}