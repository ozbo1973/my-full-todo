import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todosListing, todoToggle, todoDelete }) => {
  let items = todosListing.map(t => (
    <TodoItem
      key={t._id}
      {...t}
      onToggle={todoToggle.bind(this, t)}
      onDelete={todoDelete.bind(this, t)}
    />
  ));
  return (
    <div className="TodoList">
      <h3>My Todo Items</h3>
      <ul>{items}</ul>
    </div>
  );
};

export default TodoList;
