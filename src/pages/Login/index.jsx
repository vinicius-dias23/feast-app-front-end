import React, { useState } from 'react';
import './login-style.css';
import Rodape from './Rodape';
import Titulo from './Titulo';
import BoxLogo from './BoxLogo';
import BoxLogin from './BoxLogin';
import BoxCadastro from './BoxCadastro';

const Login = () => {
	const [formCadastroAberto, setFormCadastroAberto] = useState(false);

	return (
		<>
			<Titulo />
			<div className="container">
				<div className="box-texto">
					<BoxLogo />
				</div>
				{formCadastroAberto ? <div className="box-login-cadastro">
					<BoxCadastro setFormCadastroAberto={setFormCadastroAberto} />
				</div> :
				<div className="box-login-cadastro">
					<BoxLogin setFormCadastroAberto={setFormCadastroAberto} />
				</div>}
			</div>
			<Rodape />
		</>
	)
}

export default Login;