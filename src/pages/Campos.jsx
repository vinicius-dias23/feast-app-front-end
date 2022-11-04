import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import './login-style.css';

const Campos = () => {

	const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
	});

	const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
};

	const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

	return (
		<div className="container-campos">
			<form action="">
				<Stack spacing={2}>
					<h2 htmlFor="email">Sign In</h2>
					<TextField
						label="Email"
						id="email"
						color="secondary"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}} />
						<FormControl sx={{ m: 1, width: 'auto' }} variant="outlined">
							<InputLabel color="secondary" htmlFor="senha">Password</InputLabel>
							<OutlinedInput
								id="senha"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								color="secondary"
								onChange={handleChange('password')}
								startAdornment={
									<InputAdornment position="start">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="start"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					<FormControlLabel
						value="end"
						control={<Checkbox color="default" />}
						label="Lembrar senha?"
						labelPlacement="end" />
					<BootstrapButton variant="contained" disableRipple>Login</BootstrapButton>
					<a href="/"><h5 style={{ textAlign: 'center' }}>Novo aqui? Criar uma conta</h5></a>
				</Stack>
			</form>
		</div>
	);
};

export default Campos;