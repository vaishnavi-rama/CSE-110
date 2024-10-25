// ThemeContext.ts
import React from 'react';
import ToggleTheme from './hooksExercise'; 

export const themes = {
 light: {
   foreground: '#000000',
   background: '#eeeeee',
   
 },
 dark: {
   foreground: '#ffffff',
   background: '#222222',
 },
};

export const ThemeContext = React.createContext({
  currentTheme: themes.light, 
  toggleTheme: () => {}, 
});