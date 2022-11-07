import React from 'react';
import Stack from '@mui/material/Stack';
import Titulo from '../Login/Titulo';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './not-found-style.css'

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="box-not-found">
			<Stack style={{ alignItems: 'center', marginRight: '25px' }} spacing={2}>
				<Titulo />
				<p style={{ marginLeft: '25px' }}>Error 404 - Página não encontrada</p>
				<Button
					onClick={() => navigate(-1)}
					size="small"
					variant="outlined"
					style={{ color: 'white', fontSize: '15px',  }}
					color="inherit"
					startIcon={<ChevronLeftIcon />}>
					voltar
				</Button>
			</Stack>
		</div>
	);
}

export default NotFound;