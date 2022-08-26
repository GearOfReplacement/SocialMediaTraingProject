import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext( {} );

export const AuthProvider = ( { children } ) => {
	const [auth, setAuth] = useState(false);
	const [isAuthLoad, setIsAuthLoad] = useState(true);
	
	return (
		<AuthContext.Provider value={ { auth, setAuth, isAuthLoad, setIsAuthLoad } }>
			{ children }
		</AuthContext.Provider>
	)
}
