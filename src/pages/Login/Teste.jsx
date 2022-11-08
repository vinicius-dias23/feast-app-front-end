import React, { useState } from 'react';
import './teste.css'

const Teste = () => {
	const [painelDireitaAtivo, setPainelDireitaAtivo] = useState(false);

	return (
		<>
			<h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
			<div className={!painelDireitaAtivo ? 'container' : 'container right-panel-active'} id="container">
				<div className="form-container sign-up-container">
					<form action="#">
						<h1>Create Account</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your email for registration</span>
						<input type="text" placeHolder="Name" />
						<input type="email" placeHolder="Email" />
						<input type="password" placeHolder="Password" />
						<button>Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form action="#">
						<h1>Sign in</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your account</span>
						<input type="email" placeHolder="Email" />
						<input type="password" placeHolder="Password" />
						<a href="#">Forgot your password?</a>
						<button>Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" onClick={() => { setPainelDireitaAtivo(false); }} id="signIn">Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className="ghost" onClick={() => { setPainelDireitaAtivo(true); }} id="signUp">Sign Up</button>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<p>
					Created with <i className="fa fa-heart"></i> by
					<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
					- Read how I created this and how you can join the challenge
					<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
				</p>
			</footer>
		</>
	)
}

export default Teste;