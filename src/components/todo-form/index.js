import React, { useState } from "react";
import { TodoFormInput } from "./styles";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState();

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
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;