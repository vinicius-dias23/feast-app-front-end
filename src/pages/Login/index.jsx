import React from 'react';
import './login-style.css';
import Rodape from './Rodape';
import Titulo from './Titulo';
import BoxLogo from './BoxLogo';
import BoxLogin from './BoxLogin';
import BoxCadastro from './BoxCadastro';
import NotFound from '../NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = () => (
	<Router>
		<Titulo />
		<div className="container">
			<Routes>
				<Route
					path='/'
					index
					element={
						<>
							<div className="box-texto">
								<BoxLogo />
							</div>
							<div className="box-login-cadastro">
								<BoxLogin />
							</div>
						</>} />
				<Route
					path='cadastro'
					element={
						<>
							<div className="box-texto">
								<BoxLogo />
							</div>
							<div className="box-login-cadastro">
								<BoxCadastro />
							</div>
						</>}/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
		<Rodape />
	</Router>
)

export default Login;