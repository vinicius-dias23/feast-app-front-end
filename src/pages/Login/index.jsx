import React, { useState } from 'react';
import './login-style.css';
import Rodape from './Rodape';
import Titulo from './Titulo';
import BoxLogo from './BoxLogo';
import BoxLogin from './BoxLogin';
import BoxCadastro from './BoxCadastro';
import NotFound from '../NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = () => {
	const [painelDireitaAtivo, setPainelDireitaAtivo] = useState(false);
	return (
		<Router>
		<Titulo />
		<div className={!painelDireitaAtivo ? 'container' : 'container right-panel-active'}>
			<Routes>
				<Route
					path='/'
					index
					element={
						<>
							<div className="box-texto">
								<BoxLogo />
							</div>
							<div className="box-login-cadastro login-container">
								<BoxLogin setPainelDireitaAtivo={setPainelDireitaAtivo} />
							</div>
						</>} />
				<Route
					path='cadastro'
					element={
						<>
							<div className="box-texto texto-container">
								<BoxLogo />
							</div>
							<div className="box-login-cadastro cadastro-container">
								<BoxCadastro setPainelDireitaAtivo={setPainelDireitaAtivo} />
							</div>
						</>}/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
		<Rodape />
	</Router>
	)
}

export default Login;