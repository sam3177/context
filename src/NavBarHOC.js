import React, { useContext, useState } from 'react';
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
import { LanguageContext } from './contexts/LanguageContext';

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
function AppNavBar (props) {
	let [ search, setSearch ] = useState('');
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);
	let { classes } = props;
	let handleChange = (e) => {
		setSearch(e.target.value);
	};
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
				Context Hooks ❤️
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
							onChange={handleChange}
						/>
					</form>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(AppNavBar);
