import React from "react";
import { TodoFormInput } from "./styles";
 
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <TodoFormInput
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

export default TodoForm;