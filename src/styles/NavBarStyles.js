// import {fade} from '@material-ui/core/st'

const styles = (theme) => ({
	navBar        : {
		// backgroundColor: 'aqua'
		paddingRight                 : theme.spacing.unit * 2,
		[theme.breakpoints.up('xs')]: {
			paddingRight : theme.spacing.unit * 2.5
		}
	},
	title         : {
		display                      : 'none',
		[theme.breakpoints.up('sm')]: {
			display : 'block'
		}
	},
	switchContent : {
		margin         : '0 10px',
		display        : 'flex',
		justifyContent : 'center',
		alignItems     : 'center',
		[theme.breakpoints.up('md')]: {
			margin         : '0 30px',

		}
	},
	search        : {
		width                        : '40%',
		height                       : '50%',
		position                     : 'absolute',
		right                        : '0px',
		display                      : 'flex',
		justifyContent               : 'space-between',
		alignItems                   : 'center',
		padding                      : '0 5px',
		backgroundColor              : theme.palette.common.white,
		borderRadius                 : '4px',
		[theme.breakpoints.up('sm')]: {
			width : 'auto',
			right : '24px'
		}
	},
	searchIcon    : {
		color : 'rgba(104, 104, 104, 0.71)'
	},
	inputRoot     : {
		color : 'inherit',
		width : '100%'
	},
	inputInput    : {
		width                        : '100%',
		color                        : 'rgba(104, 104, 104, 0.71)',
		transition                   : theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			width : '150px'
		},
		[theme.breakpoints.up('lg')]: {
			width : '180px'
		},
		'&:focus'                    : {
			[theme.breakpoints.up('sm')]: {
				width : '200px'
			},
			[theme.breakpoints.up('lg')]: {
				width : '230px'
			}
		}
	}
});
export default styles;
