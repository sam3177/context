import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function PageContent (props) {
	const { isDarkMode } = useContext(ThemeContext);
	const styles = {
		height          : '100vh',
		backgroundColor :
			isDarkMode ? '#3d3d3d' :
			'#d9d9d9'
	};
	return <div style={styles}>{props.children}</div>;
}

export default PageContent;
