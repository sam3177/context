import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider (props) {
	let [ isDarkMode, setIsDarkMode ] = useState(true);
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export { ThemeProvider, ThemeContext };
