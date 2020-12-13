import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

class ThemeProvider extends Component {
   state = {isDarkMode: true};
   toggleTheme = () => {
      this.setState({isDarkMode: !this.state.isDarkMode});
   }
	render () {
		return <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>{this.props.children}</ThemeContext.Provider>;
	}
}

export { ThemeProvider, ThemeContext };
