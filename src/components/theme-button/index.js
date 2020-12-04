import React from "react";
import { ThemeBtn } from "./style"

const ThemeButton = ({ toggleTheme, theme }) => (
            <div className="theme-button">
                 <ThemeBtn 
                 type="button"  
                 style={{
                     background: theme === 'dark' ? '#080729' : '#e8e8e8',
                     color: theme === 'dark' ? '#f7f7ff' : '#000' 
                 }}
                onClick={toggleTheme}>
                    Switch theme
                </ThemeBtn>
                 
            </div>
);

export default ThemeButton;
