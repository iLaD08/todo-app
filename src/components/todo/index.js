import React from "react"

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
          className="todo"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.text}
          <div className="todo-buttons">
            <button style={{ display: todo.isCompleted ? "none" : "" }} onClick={() => completeTodo(index)}>✅</button>
            <button onClick={() => removeTodo(index)}>❌</button>
          </div>
        </div>
      );
  };

export default Todo;