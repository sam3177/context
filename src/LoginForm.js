import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/CheckBox';
import { withStyles } from '@material-ui/core/styles';
import { LanguageContext } from './contexts/LanguageContext';
import styles from './styles/LoginFormStyles';

const dictionary = {
	English : {
		description : 'Please enter login details',
		email       : 'Email',
		password    : 'Password',
		remember    : 'Remember me',
		login       : 'Login'
	},
	Español : {
		description : 'Please enter login details in spanish',
		email       : 'Correo electronico',
		password    : 'Contraseña',
		remember    : 'Recuerdame!',
		login       : 'Login'
	},
	Français : {
		description : 'Please enter login details in french',
		email       : 'Adresse Èlectronique',
		password    : 'Password in french',
		remember    : 'Remember me in french',
		login       : 'Login'
	},
};

class LoginForm extends Component {
	static contextType = LanguageContext;
	render () {
		let { language, changeLanguage } = this.context;
		let { classes } = this.props;
		const {description, email, password, remember, login} = dictionary[language];
		return (
			<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Select
						value={language}
						className={classes.select}
						onChange={changeLanguage}
					>
						<MenuItem value="English">English</MenuItem>
						<MenuItem value="Español">Español</MenuItem>
						<MenuItem value="Français">Français</MenuItem>
					</Select>
					<Typography>{description}</Typography>
					<form className={classes.form}>
						<FormControl fullWidth required margin="normal">
							<InputLabel htmlFor="email">{email}</InputLabel>
							<Input id="email" type="text" autoFocus name="email" />
						</FormControl>
						<FormControl fullWidth required margin="normal">
							<InputLabel htmlFor="password">{password}</InputLabel>
							<Input id="password" type="password" name="password" />
						</FormControl>
						<FormControlLabel
							margin="normal"
							control={<CheckBox color="primary" />}
							label={remember}
						/>
						<Button type="submit" fullWidth variant="contained" color="primary">
							{login}
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}

export default withStyles(styles)(LoginForm);
