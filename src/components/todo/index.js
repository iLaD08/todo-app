import React from "react"

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
          className="todo"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.text}
          <div className="todo-buttons">
            <button onClick={() => completeTodo(index)}>✅</button>
            <button onClick={() => removeTodo(index)}>❌</button>
          </div>
        </div>
      );
  };

export default Todo;