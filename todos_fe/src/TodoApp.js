import React, { Component } from "react";
import * as apiCalls from "./apiCalls";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }

  componentWillMount() {
    this.loadTodos();
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({ todos });
  }

  async handleCreateTodo(name) {
    const newTodo = await apiCalls.createTodo(name);
    console.log(newTodo);
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  async handleToggleCompleted(todo) {
    await apiCalls.toggleCompleted(todo);
    const todos = this.state.todos.map(
      t => (t._id === todo._id ? { ...t, completed: !t.completed } : t)
    );
    this.setState({ todos });
  }

  async handleDeleteItem(todo) {
    await apiCalls.deleteTodo(todo);
    const todos = this.state.todos.filter(t => t._id !== todo._id);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="TodoApp">
        <TodoForm onFormSubmit={this.handleCreateTodo} />
        <TodoList
          todosListing={this.state.todos}
          todoToggle={this.handleToggleCompleted}
          todoDelete={this.handleDeleteItem}
        />
      </div>
    );
  }
}

export default TodoApp;
