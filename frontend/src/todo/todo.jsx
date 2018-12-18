import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList />
            </div>
        )
    }
}