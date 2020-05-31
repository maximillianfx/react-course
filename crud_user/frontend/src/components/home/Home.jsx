import React from 'react'
import Main from '../template/Main'

export default props => {
	return(
		<Main icon="home" title="Início" subTitle="Terceiro projeto de React">
			<div className="display-4">Bem vindo!</div>
			<hr />
			<p className="mb-0">Sistema para exemplificar cadastro de usuários em React!</p>
		</Main>
	)
}