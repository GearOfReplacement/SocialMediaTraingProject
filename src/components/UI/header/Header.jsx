import React from "react";

import { Navigation } from "../navigation/Navigation";

import { AuthContext } from "../../../store/store";
import { useContext } from "react";

import { MyButton } from "../button/MyButton";
import cl from "./Header.module.css";

export const Header = ( ) => {
	const { auth, setAuth } = useContext(AuthContext);

	const logOut = () => {
		setAuth(false);
		localStorage.removeItem('auth');
	}

	return (
		<header className={cl.header}>
			<Navigation />
			{
				auth && <MyButton onClick={ () => { logOut() } }>Log out</MyButton>
			}
		</header>
	)
}
