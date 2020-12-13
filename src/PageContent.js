import React, { Component } from 'react';
import {ThemeContext} from './contexts/ThemeContext'

class PageContent extends Component {
   static contextType = ThemeContext
	render () {
      const {isDarkMode} =this.context
      let styles={
         height: '100vh',
         backgroundColor: isDarkMode ? '#3d3d3d' : '#d9d9d9'
      }
		return <div style={styles}>{this.props.children}</div>;
	}
}

export default PageContent;
