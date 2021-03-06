import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles/NavBarStyles';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

const dictionary = {
	English  : {
		search : 'Search....',
		flag   : '🇺🇸'
	},
	Español  : {
		search : 'Buscar...',
		flag   : '🇪🇸'
	},
	Français : {
		search : 'Chercher...',
		flag   : '🇫🇷'
	}
};

class AppNavBar extends Component {
	static contextType = ThemeContext;
	state = { search: '' };
	handleChange = (e) => {
		this.setState({ search: e.target.value });
	};
	render () {
		const { isDarkMode, toggleTheme } = this.context;
		console.log(this.context);
		let { classes } = this.props;
		const { language } = this.props.languageContext;
		let { search } = this.state;
		return (
			<AppBar
				position="static"
				className={classes.navBar}
				color={

						isDarkMode ? 'primary' :
						'default'
				}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton color="inherit" aria-label="Flag">
         <span>{dictionary[language].flag}</span>
					</IconButton>
					<Typography
						className={classes.title}
						variant="h6"
						color="inherit"
						noWrap
					>
						Tralala {language}
					</Typography>
					<div className={classes.switchContent}>
						<Typography>N/D mode</Typography>
						<Switch onChange={toggleTheme} />
					</div>
					<div className={classes.search}>
						<SearchIcon className={classes.searchIcon} />
						<form>
							<InputBase
								// fullWidth
								classes={{
									root  : classes.inputRoot,
									input : classes.inputInput
								}}
								// autoFocus
								placeholder={dictionary[language].search}
								type="text"
								// name="userName"
								value={search}
								onChange={this.handleChange}
							/>
						</form>
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withLanguageContext(withStyles(styles)(AppNavBar));
