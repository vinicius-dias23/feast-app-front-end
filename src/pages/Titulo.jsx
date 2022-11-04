import React from 'react';
import Stack from '@mui/material/Stack';
import logo from './logo.png';
import './logo.css'

const Titulo = () => (
	<Stack direction="row" spacing={2}>
		<img src={logo} alt="logo" className="logo" />
		<p className="tiulo-logo">FEAST APP</p>
	</Stack>
)

export default Titulo;