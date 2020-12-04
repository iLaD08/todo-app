import React,{ useState, useEffect } from "react";
import Todo from "../todo/index";
import TodoForm from "../todo-form/index";
import { TodoListDiv, Title } from "./styles";


const TodoList = ({ theme }) => {
    const initialvalue = JSON.parse(window.localStorage.getItem("todos"));

    const [todos, setTodos] = useState([]);

    useEffect(() => {
      initialvalue && setTodos(initialvalue);
  }, [initialvalue]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        window.localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        window.localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(newTodos));
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