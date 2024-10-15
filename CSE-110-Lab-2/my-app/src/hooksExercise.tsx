import { ThemeContext, themes } from "./themeContext";
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';

// Wrapper component to provide context
function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
   
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
   
    return (
      <ThemeContext.Provider value={currentTheme}>
        <button onClick={toggleTheme}> Toggle Theme </button>
        <ClickCounter />
      </ThemeContext.Provider>
    );
   }
   
   export default ToggleTheme;
   
   

export function ClickCounter() {
    const [count, setCount] = useState(0);
   
    const handleClick = () => {
      setCount(count + 1);
    };
   
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);
   
    const theme = useContext(ThemeContext);
return (
   <div
     style={{
       background: theme.background,
       color: theme.foreground,
       padding: "20px",
     }}
   >
     <p>You clicked {count} times </p>
     <button
       onClick={() => setCount(count + 1)}
       style={{ background: theme.foreground, color: theme.background }}
     >
       Click me
     </button>
   </div>
 );
   }


   


