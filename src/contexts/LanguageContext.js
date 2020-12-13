import React, { Component, createContext } from 'react';

const LanguageContext = createContext();

class LanguageProvider extends Component {
   state = {language: 'English'};
   toggleLanguage = (val) => {
      this.setState({language: val});
   }
	render () {
		return <LanguageContext.Provider value={{...this.state, toggleLanguage: this.toggleLanguage}}>{this.props.children}</LanguageContext.Provider>;
	}
}

export { LanguageProvider, LanguageContext };
