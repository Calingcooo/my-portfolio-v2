"use client"

import React, { createContext, ReactNode, useContext, useState, FC, useEffect } from 'react';
import ImageDrawingLoader from '../components/Loading';

interface ThemeContextInterface {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ 
  children
}) => {
  const [ mounted, setMounted ] = useState<boolean>(true)
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
    setMounted(true);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return <ImageDrawingLoader />

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextInterface => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProvider"
    );
  }
  return context;
};