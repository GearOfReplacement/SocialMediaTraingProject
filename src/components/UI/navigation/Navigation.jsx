import React, { useContext } from "react";

import { AuthContext } from "../../../store/store";
import { privatRouteLinks, routeLinks } from "../../../store/routes";
import { NavigationLink } from "../navigationLink/NavigationLink";

import cl from './Navigation.module.css';

export const Navigation = () => {
	const { auth } = useContext(AuthContext);

	return (
		<nav className={ cl.navigation }>
			<ul className={ cl.list }>
			{ 
				auth ?
					privatRouteLinks.map( ( route ) => 
						<NavigationLink path={ route.path } name={ route.name } key={ route.path }/>
					)
				:	
					routeLinks.map( ( route ) => 
						<NavigationLink path={ route.path } name={ route.name } key={ route.path }/>
					)
			}	
			</ul>
		</nav>	
	)
}
