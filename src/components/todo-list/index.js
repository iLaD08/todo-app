import React from "react";
import Todo from "../todo/index";
import TodoForm from "../todo-form/index";

const TodoList = () => {
  
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
        <div className="todo-list">
          <h1>Todo list:</h1>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    )
};

export default TodoList;