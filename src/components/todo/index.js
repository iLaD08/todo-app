import React from "react";
import { TodoDiv, TodoButtonsDiv, TodoButtons } from "./styles";

const Todo = ({ todo, index, completeTodo, removeTodo, theme }) => {
    return (
        <TodoDiv
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "",
            background: theme === 'dark' ? '#29284f' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000' 
          }}
        >
          {todo.text}
          <TodoButtonsDiv>
            <TodoButtons style={{ display: todo.isCompleted ? "none" : "" }} onClick={() => completeTodo(index)}>✅</TodoButtons>
            <TodoButtons onClick={() => removeTodo(index)}>❌</TodoButtons>
          </TodoButtonsDiv>
        </TodoDiv>
      );
  };

export default Todo;