import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
	icon: "users",
	title: "Usuários",
	"subTitle": "Cadastro de usuários"
}

class UserCrud extends Component {

	render() {
		return(
			<Main {...headerProps}>
				Cadastro de Usuário
			</Main>
		)
	}

}

export default UserCrud