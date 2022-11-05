import React from 'react';
import Stack from '@mui/material/Stack';
import logo from './logo.png';
import Titulo from './Titulo';

const BoxLogo = () => (
	<>
	<Stack style={{ alignItems: 'center', marginRight: '25px' }} spacing={2}>
		<Titulo />
		<p style={{ marginLeft: '25px' }}>Conheça a nova maneira de organizar a sua festa</p>
	</Stack>
	</>
)

export default BoxLogo;