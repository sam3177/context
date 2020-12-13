const styles = (theme) => ({
	main   : {
		width                        : 'auto',
		marginTop                    : theme.spacing.unit * 10,
		marginLeft                   : theme.spacing.unit * 3,
		marginRight                  : theme.spacing.unit * 3,
		[theme.breakpoints.up('sm')]: {
			width     : '400px',
			margin    : 'auto',
			marginTop : theme.spacing.unit * 10
		}
	},
	avatar : {
		backgroundColor : theme.palette.secondary.main
	},
	select : {
		margin : theme.spacing.unit * 2
	},
	form   : {
		width : '80%'
		// display : 'flex',
		// flexDirection : 'column',
		// alignItems : 'center'
		// margin : '200px auto'
	},
	paper  : {
		padding       : theme.spacing.unit * 3,

		display       : 'flex',
		flexDirection : 'column',
		alignItems    : 'center'
	}
});
export default styles;
