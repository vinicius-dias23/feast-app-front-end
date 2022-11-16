import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../contexts/authGoogle';
import { sendEmailVerification } from 'firebase/auth';
import './cadastro.css';

const Cadastro = ({ setPainelDireitaAtivo }) => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

	function handleSignOut(e) {
		e.preventDefault();
		createUserWithEmailAndPassword(email, valorSenha.password)
		.then((userCredential) => {
			const user = userCredential.user;
			sendEmailVerification(user);
		})
		.catch((error) => {
			console.log(error);
		});;
		
	}

	const [valorSenha, setValorSenha] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
	});

	const [valorConfirmacaoSenha, setValorConfirmacaoSenha] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
	});

	const handleMudarValorSenha = (prop) => (event) => {
    setValorSenha({ ...valorSenha, [prop]: event.target.value });
	};

	const handleMudarValorConfirmacaoSenha = (prop) => (event) => {
		setValorConfirmacaoSenha({ ...valorConfirmacaoSenha, [prop]: event.target.value });
	};

	const handleMostrarSenha = () => {
    setValorSenha({
			...valorSenha,
			showPassword: !valorSenha.showPassword,
    });
	};

	const handleMostrarConfirmacaoSenha = () => {
    setValorConfirmacaoSenha({
			...valorConfirmacaoSenha,
			showPassword: !valorConfirmacaoSenha.showPassword,
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

	return (
		<div className="container-campos-cadastros">
			<Stack spacing={2}>
				<h2 htmlFor="email">Cadastro</h2>
				<Stack style={{ justifyContent: 'center' }} direction="row" spacing={4}>
					<FacebookIcon />
					<GoogleIcon />
					<TwitterIcon />
				</Stack>
				<Stack direction="row" spacing={1}>
					<TextField
						label="Email"
						id="email"
						color="secondary"
						onChange={e => setEmail(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AlternateEmailIcon />
								</InputAdornment>
							),
						}} />
						<TextField
							label="Usuário"
							id="usuario"
							color="secondary"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}} />
					</Stack>
					<Stack direction="row" spacing={2}>
						<FormControl sx={{ m: 1, width: 'auto' }} style={{ marginLeft: '0px' }} variant="outlined">
							<InputLabel color="secondary" htmlFor="senha">Senha</InputLabel>
							<OutlinedInput
								id="senha"
								type={valorSenha.showPassword ? 'text' : 'password'}
								value={valorSenha.password}
								color="secondary"
								onChange={(handleMudarValorSenha('password'))}
								startAdornment={
									<InputAdornment position="start">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleMostrarSenha}
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
						<FormControl sx={{ m: 1, width: 'auto' }} style={{ marginTop: '8px', marginLeft: '0px'  }} variant="outlined">
							<InputLabel color="secondary" htmlFor="senha">Confirmar Senha</InputLabel>
							<OutlinedInput
								id="confirmar_senha"
								type={valorConfirmacaoSenha.showPassword ? 'text' : 'password'}
								value={valorConfirmacaoSenha.password}
								color="secondary"
								onChange={handleMudarValorConfirmacaoSenha('password')}
								startAdornment={
									<InputAdornment position="start">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleMostrarConfirmacaoSenha}
											onMouseDown={handleMouseDownPassword}
											edge="start"
										>
											{valorConfirmacaoSenha.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Confirmar Senha"
							/>
						</FormControl>
					</Stack>
					<TextField
						label="Telefone (Opcional)"
						id="telefone"
						color="secondary"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LocalPhoneIcon />
								</InputAdornment>
							),
						}} />
					<BootstrapButton onClick={handleSignOut} variant="contained" disableRipple>Cadastrar</BootstrapButton>
					<Link onClick={() => { setPainelDireitaAtivo(false); setTimeout(() => { navigate('/'); }, 300); }}>
						Voltar para o Login
					</Link>
			</Stack>
		</div>
	);
}

export default Cadastro;