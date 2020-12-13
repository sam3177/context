import React, { Component, createContext } from 'react';

const LanguageContext = createContext();

class LanguageProvider extends Component {
	state = { language: 'English' };
	changeLanguage = (e) => {
		this.setState({ language: e.target.value });
	};
	render () {
		return (
			<LanguageContext.Provider
				value={{ ...this.state, changeLanguage: this.changeLanguage }}
			>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}

const withLanguageContext = (Component) => (props) => (
	<LanguageContext.Consumer>
		{(value) => <Component languageContext={value} {...props} />}
	</LanguageContext.Consumer>
)
export { LanguageProvider, LanguageContext, withLanguageContext };
