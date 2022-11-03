import React from 'react';
import Stack from '@mui/material/Stack';
import logo from './logo.png';
import './login-style.css'

const Rodape = () =>  (
	<footer className="rodape">
		<Stack direction="row" spacing={2}>
			<p>Desenvolvido por Vinícius Dias e Matheus Hoske - Todos os direitos Reservados</p>
			<img src={logo} alt="logo" className="logo" />
		</Stack>
	</footer>
)
export default Rodape;