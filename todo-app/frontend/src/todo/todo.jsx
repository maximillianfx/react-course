import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'


const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {


	constructor(props) {
		super(props)
		this.state = { description:'', list: [] }
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleAdd() {
		const description = this.state.description
		axios.post(URL, { description }).then(res => console.log('Funcionou'))
	}

	handleChange(e) {
		this.setState({...this.state, description: e.target.value })
	}

    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange}/>
                <TodoList/>
            </div>
        )
    }

}

export default Todo;