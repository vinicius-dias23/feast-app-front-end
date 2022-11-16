import React, { useState } from 'react';
import './routes.css';
import Rodape from '../components/Rodape';
import Titulo from '../components/Logo';
import BoxLogo from '../pages/Login/BoxLogo';
import BoxLogin from '../pages/Login/BoxLogin';
import BoxCadastro from '../pages/Cadastro';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './routes';

const AppRoutes = () => {
	const [painelDireitaAtivo, setPainelDireitaAtivo] = useState(false);
	return (
		<Router>
			<Titulo />
				<Routes>
						<Route
							path='/'
							index
							element={
								<div className={!painelDireitaAtivo ? 'container' : 'container right-panel-active'}>
									<div className="box-texto texto-container">
										<BoxLogo />
									</div>
									<div className="box-login-cadastro login-container">
										<BoxLogin setPainelDireitaAtivo={setPainelDireitaAtivo} />
									</div>
								</div>} />
						<Route
							path='cadastro'
							element={
								<div className={!painelDireitaAtivo ? 'container' : 'container right-panel-active'}>
									<div className="box-texto texto-container">
										<BoxLogo />
									</div>
									<div className="box-login-cadastro cadastro-container">
										<BoxCadastro setPainelDireitaAtivo={setPainelDireitaAtivo} />
									</div>
								</div>}/>
					<Route path='/home' element={<PrivateRoutes />}>
						<Route path='/home' element={<Home />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			<Rodape />
		</Router>
	)
}

export default AppRoutes;