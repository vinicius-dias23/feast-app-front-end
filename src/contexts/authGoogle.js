import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../service/firebaseConfig';
import { Navigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});
export const auth = getAuth(app);

export const AuthGoogleProvider = ({ children }) => {
	
	const [user, setUser] = useState(null);

	useEffect(() => {
		const loadStorageAuth = () => {
			const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
			const sessionUser = sessionStorage.getItem("@AuthFirebase:user");

			if (sessionToken && sessionUser) {
				setUser(JSON.parse(sessionUser));
			}
		};
		loadStorageAuth();
	}, []);

	const signInGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				setUser(JSON.parse(JSON.stringify(user)));
				sessionStorage.setItem("@AuthFirebase:token", token);
				sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
			}).catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};

	function signOut() {
		sessionStorage.clear();
		setUser(null);

		return <Navigate to="/" />;
	};

	return (
		<AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user, user, signOut }}>
			{children}
		</AuthGoogleContext.Provider>
	)
}