import { ThemeContext, themes } from "./themeContext";
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';

// Wrapper component to provide context
function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
   
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
   
    // const theme = useContext(ThemeContext);
    // useEffect(() => {
    //     document.body.style.background = currentTheme.background;
    //     document.body.style.color = currentTheme.foreground;
    //     var notes = document.getElementsByClassName("notes-grid");
    //     for (var i = 0; i < notes.length; i++) {
    //         let element = notes[i] as HTMLElement;
    //         element.style.color = currentTheme.foreground;
    //         element.style.background = currentTheme.background;

    //     }

    // });

    return (
      <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
        <button onClick={toggleTheme}> Toggle Theme </button>
      </ThemeContext.Provider>
    );
   }
   
   export default ToggleTheme;
   
//    function ChangeBackground() {
  
//     const theme = useContext(ThemeContext);
//     useEffect(() => {
//         document.body.style.background = theme.background;
//         document.body.style.color = theme.foreground;
//         var notes = document.getElementsByClassName("notes-grid");
//         for (var i = 0; i < notes.length; i++) {
//             let element = notes[i] as HTMLElement;
//             element.style.color = currentTheme.background;
//             element.style.background = theme.background;

//         }

//     });

//     return (<div></div>);
    
// }


   




// export function ClickCounter() {
//     const [count, setCount] = useState(0);
   
//     const handleClick = () => {
//       setCount(count + 1);
//     };
   
//     useEffect(() => {
//       document.title = `You clicked ${count} times`;
//     }, [count]);
   
//     const theme = useContext(ThemeContext);
// return (
//    <div
//      style={{
//        background: theme.background,
//        color: theme.foreground,
//        padding: "20px",
//      }}
//    >
//      <p>You clicked {count} times </p>
//      <button
//        onClick={() => setCount(count + 1)}
//        style={{ background: theme.foreground, color: theme.background }}
//      >
//        Click me
//      </button>
//    </div>
//  );
//    }


   


