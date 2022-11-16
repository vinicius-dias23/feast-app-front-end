import React, { useContext } from 'react';
import { AuthGoogleContext } from '../../contexts/authGoogle';

const Home = () => {
	const { user, signOut } = useContext(AuthGoogleContext);

	return (
		<div style={{ backgroundColor: 'white' }}>
			<h1>Bem Vindo {user.displayName}</h1>
			<button onClick={() => signOut()}>Sair</button>
		</div>
	)
};

export default Home;
