import React, { useContext, useState } from 'react';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, AuthGoogleContext } from '../../contexts/authGoogle';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './login.css';

const BoxLogin = ({ setPainelDireitaAtivo }) => {
	const { signInGoogle, signed } = useContext(AuthGoogleContext);
	const [email, setEmail] = useState('');

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	function handleSignIn(e) {
		e.preventDefault();
		signInWithEmailAndPassword(email, valorSenha.password);
	}

	async function loginGoogle() {
		await signInGoogle();
	}

	const navigate = useNavigate();

	const [valorSenha, setValorSenha] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
	});

	const handleChange = (prop) => (event) => {
    setValorSenha({ ...valorSenha, [prop]: event.target.value });
};

	const handleClickShowPassword = () => {
    setValorSenha({
			...valorSenha,
			showPassword: !valorSenha.showPassword,
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

	if (loading) {
		return <p>carregando...</p>
	}

	if (user) {
		return console.log(user)
	}

	if (!signed) {
		return (
			<div className="container-campos-login">
				<Stack spacing={2}>
					<h2 htmlFor="email">Login</h2>
					<Stack style={{ justifyContent: 'center' }} direction="row" spacing={4}>
						<IconButton color='inherit'><FacebookIcon /></IconButton>
						<IconButton onClick={loginGoogle} color='inherit'><GoogleIcon /></IconButton>
						<IconButton color='inherit'><TwitterIcon /></IconButton>
					</Stack>
					<TextField
						label="Email"
						id="email"
						color="secondary"
						fullWidth
						onChange={e => setEmail(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}} />
						<FormControl sx={{ m: 1, width: 'auto' }} variant="outlined">
							<InputLabel color="secondary" htmlFor="senha">Senha</InputLabel>
							<OutlinedInput
								id="senha"
								type={valorSenha.showPassword ? 'text' : 'password'}
								value={valorSenha.password}
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
											{valorSenha.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Senha"
							/>
						</FormControl>
					<FormControlLabel
						value="end"
						control={<Checkbox color="default" />}
						label="Lembrar senha?"
						labelPlacement="end" />
					<BootstrapButton onClick={handleSignIn} variant="contained" disableRipple>Login</BootstrapButton>
					<Link onClick={() => { setPainelDireitaAtivo(true); setTimeout(() => { navigate('/cadastro'); }, 300); }}>
						Novo aqui? Criar uma conta
					</Link>
				</Stack>
			</div>
		);
	} else {
		return <Navigate to='/home' />
	}
};

export default BoxLogin;