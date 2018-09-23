import React, { Component } from "react";
import Header from "./Header";
import TodoApp from "./TodoApp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My Todo Application" />
        <TodoApp />
      </div>
    );
  }
}

export default App;
