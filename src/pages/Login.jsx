import React from 'react';
import Campos from './Campos';
import './login-style.css';
import Texto from './Texto';
import Rodape from './Rodape';
import Titulo from './Titulo';

const Login = () => {
	return (
		<>
			<Titulo />
			<div className="container">
				<div className="box-texto">
					<Texto />
				</div>
				<div className="box-campos">
					<Campos />
				</div>
			</div>
			<Rodape />
		</>
	)
}

export default Login;