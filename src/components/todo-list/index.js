import React from "react";
import Todo from "../todo/index";
import TodoForm from "../todo-form/index";
import { TodoListDiv, Title } from "./styles";

const TodoList = ({ theme }) => {
  
    const [todos, setTodos] = React.useState([
      { text: "Learn about React" },
      { text: "Meet friend for lunch" },
      { text: "Build really cool todo app" }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    
    return (
        <TodoListDiv
        style={{
          background: theme === 'dark' ? '#080729' : '#e8e8e8',
          color: theme === 'dark' ? '#f7f7ff' : 'gray' 
        }}>
          <Title>Todo list:</Title>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            theme={theme}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </TodoListDiv>
    )
};

export default TodoList;