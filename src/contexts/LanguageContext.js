import React, { useState, createContext } from 'react';

const LanguageContext = createContext();

function LanguageProvider (props) {
	let [ language, setLanguage ] = useState('English');
	const changeLanguage = (e) => {
		setLanguage(e.target.value);
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
}

export { LanguageProvider, LanguageContext };
