import React, { useEffect } from "react";
import TodoList from "./components/todo-list/index";
import ThemeButton from "./components/theme-button/index";
import useTheme from "./hooks/useTheme";
import './App.css';
  
const App = () => {
    const [theme, toggleTheme] = useTheme();
    useEffect(() => {
        document.body.style.backgroundColor = theme === 'dark' ? '#020212' : '#fff';
    }, [theme]);

 return (
        <div className="App">
            <div className="todoapp">
                <TodoList theme={theme}/>
            </div>
            <ThemeButton theme={theme} toggleTheme={toggleTheme}/>
        </div>
    )
};

export default App;