import React from "react";
import TodoList from "./components/todo-list/index"
import './App.css';
  
const App = () =>  (
        <div className="App">
            <div className="todoapp">
                <TodoList />
            </div>
        </div>
);

export default App;