import react from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './login-style.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Campos = () => {

	

	const BootstrapButton = styled(Button)({
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '6px 12px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: 'purple',
		borderColor: 'purple',
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
			backgroundColor: 'purple',
			borderColor: 'purple',
			boxShadow: 'none',
			cursor: 'pointer',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: 'purple',
			borderColor: 'purple',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
	});

	const CssTextField = styled(TextField)({
		'& label.Mui-focused': {
			color: 'purple',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'purple',
		},
		'& .MuiOutlinedInput-root': {
			'&:hover fieldset': {
				borderColor: 'purple',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'purple',
			},
		},
	});

	return (
		<div className="container-campos">
			<form action="">
				<Stack spacing={2}>
					<h2 htmlFor="custom-css-outlined-input">Sign In</h2>
					<CssTextField
						label="Email"
						id="custom-css-outlined-input"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}} />
						<CssTextField
							id="input-with-icon-textfield"
							label="Senha"
							//type="password"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<VisibilityIcon />
									</InputAdornment>
								),
							}}
							variant="outlined"
						/>
					<FormControlLabel
						value="end"
						control={<Checkbox color="default" />}
						label="Lembrar senha?"
						labelPlacement="end"
					/>
					<BootstrapButton variant="contained" disableRipple>Login</BootstrapButton>
				</Stack>
			</form>
		</div>
	);
};

export default Campos;