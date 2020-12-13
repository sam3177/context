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
import styles from './styles/LoginFormStyles';

class LoginForm extends Component {
	state = { userName: '', password: '', language:'English'};
	handleLanguage= (e) => {
		this.setState({ language: e.target.value });
	};
	render () {
		let { language } = this.state;
		let { classes } = this.props;
		return (
			<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Select value={language} className={classes.select} onChange={this.handleLanguage}>
						<MenuItem value="English">English</MenuItem>
						<MenuItem value="Español">Español</MenuItem>
						<MenuItem value="Français">Français</MenuItem>
					</Select>
					<Typography>Please enter login details</Typography>
					<form className={classes.form}>
						<FormControl fullWidth required margin="normal">
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input id="email" type="text" autoFocus name="email" />
						</FormControl>
						<FormControl fullWidth required margin="normal">
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input id="password" type="password" name="password" />
						</FormControl>
						<FormControlLabel
							margin="normal"
							control={<CheckBox color="primary" />}
							label="Remember Me"
						/>
						<Button type="submit" fullWidth variant="contained" color="primary">
							Login
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}

export default withStyles(styles)(LoginForm);
