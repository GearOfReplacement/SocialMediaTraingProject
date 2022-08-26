import React from "react";

import { routes, privatRoutes } from "../store/routes";
import { AuthContext } from "../store/store";
import { useContext } from "react";

import {
	Routes,
  Route,
} from "react-router-dom";

import { useEffect } from "react";
import { Home } from "../Pages/Home";

export const Routing = () => {
	const {	auth, setAuth	} = useContext( AuthContext );

	useEffect(() => {
		if( localStorage.getItem( 'auth' ) ) {
			setAuth(true);
		}
	}, []);

	return (
		<Routes>
			{
				auth 
				?	privatRoutes.map( (route) => 
						<Route 
							key={route.path}
							path={route.path}
							element={route.element}
						/>
					)
				:	routes.map( (route) => 
					<Route 
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				)
			}
			<Route path='*' element={<Home/>}   />
		</Routes>
	)
}
