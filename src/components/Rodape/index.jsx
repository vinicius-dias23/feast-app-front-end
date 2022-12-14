import React from 'react';
import Stack from '@mui/material/Stack';
import logo from '../../assets/images/logo.png';
import './rodape.css'

const Rodape = () =>  (
	<footer className="rodape">
		<Stack direction="row" spacing={2}>
			<p>© 2022 Feast App - Todos os direitos Reservados</p>
			<img src={logo} alt="logo" className="logo" />
		</Stack>
	</footer>
)
export default Rodape;