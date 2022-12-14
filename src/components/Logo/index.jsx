import React from 'react';
import Stack from '@mui/material/Stack';
import logo from '../../assets/images/logo.png';
import './logo.css'

const Logo = () => (
	<Stack direction="row" spacing={2}>
		<img src={logo} alt="logo" className="logo" />
		<p className="tiulo-logo">FEAST</p>
	</Stack>
)

export default Logo;