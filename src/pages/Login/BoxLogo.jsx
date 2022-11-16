import React from 'react';
import Stack from '@mui/material/Stack';
import Logo from '../../components/Logo';

const BoxLogo = () => (
	<Stack style={{ alignItems: 'center', marginRight: '25px' }} spacing={2}>
		<Logo />
		<p style={{ marginLeft: '25px' }}>Conheça a nova maneira de organizar a sua festa</p>
	</Stack>
)

export default BoxLogo;