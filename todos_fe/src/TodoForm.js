import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
  }

  handleInputChange(e) {
    this.setState({ todoInput: e.target.value });
  }

  handleSubmitTodo(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.todoInput);
    this.setState({ todoInput: "" });
  }

  render() {
    return (
      <div className="TodoForm">
        <form>
          <input
            type="input"
            value={this.state.todoInput}
            onChange={this.handleInputChange}
            placeholder="input task here"
          />
          <button onClick={this.handleSubmitTodo} type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
