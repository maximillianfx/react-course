import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
	icon: "users",
	title: "Usuários",
	"subTitle": "Cadastro de usuários"
}

const URL_API = "http://localhost:3003/users"

const initialState = {
	user: { name: '', email: '' },
	list: []
}

class UserCrud extends Component {

	state = {...initialState}

	clear() {
		this.setState({ user: initialState.user })
	}

	getUsers() {
		axios.get(URL_API).then(resp => this.setState({ list: resp.data.sort((a,b) => a.id - b.id) }))
	}

	save() {
		const user = this.state.user
		const method = user.id ? 'put' : 'post'
		const url = user.id ? URL_API+"/"+user.id : URL_API
		axios[method](url, user)
			.then(resp => {
				const list = this.getUpdatedList(resp.data)
				this.setState({ user: initialState.user, list })
			})
	}

	getUpdatedList(user) {
		const list = this.state.list.filter(u => u.id !== user.id)
		list.unshift(user)
		return list.sort((a,b) => a.id - b.id)
	}

	updateField(e) {
		const user = { ...this.state.user }
		user[e.target.name] = e.target.value
		this.setState({ user })
	}

	renderForm() {
		return(
			<div className="form">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Nome</label>
							<input type="text" className="form-control" name="name"
								value={this.state.user.name} onChange={e => this.updateField(e)}
								placeholder="Digite um nome"/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>E-mail</label>
							<input type="text" className="form-control" name="email"
								value={this.state.user.email} onChange={e => this.updateField(e)}
								placeholder="Digite um email"/>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<button className="btn btn-primary" onClick={e => this.save(e)}>
							Salvar
						</button>
						<button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
							Cancelar
						</button>
					</div>
				</div>
			</div>
		)
	}

	componentWillMount() {
		this.getUsers()
	}

	load(user) {
		this.setState({ user })
	}

	remove(user) {
		axios.delete(URL_API+"/"+user.id).then(resp => {
			this.getUsers()
		})
	}

	renderTable() {
		return(
			<table className="table mt-4">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Email</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		)
	}

	renderRows() {
		return this.state.list.map(user => {
			return (
				<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>
						<button className="btn btn-warning" onClick={() => this.load(user)}>
							<i className="fa fa-pencil"></i>
						</button>
						<button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
							<i className="fa fa-trash"></i>
						</button>
					</td>
				</tr>
			)
		})
	}

	render() {
		return(
			<Main {...headerProps}>
				{this.renderForm()}
				{this.renderTable()}
			</Main>
		)
	}

}

export default UserCrud