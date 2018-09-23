import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
  const { name, completed, onToggle, onDelete } = props;
  let lineThrough = "";
  completed
    ? (lineThrough = "TodoItem-completed")
    : (lineThrough = "TodoItem-not-completed");
  return (
    <li className="TodoItem">
      <span className={`Todo-item-name ${lineThrough}`} onClick={onToggle}>
        {name}{" "}
      </span>
      <span className="delete-item-button" onClick={onDelete}>
        X
      </span>
    </li>
  );
};

export default TodoItem;
