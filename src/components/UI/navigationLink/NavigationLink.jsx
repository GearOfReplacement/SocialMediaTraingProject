import React from "react";
import { NavLink } from "react-router-dom";
import cl from './NavigationLink.module.css';

export const NavigationLink = ( { path , name } ) => {
	return (
		<li  >
			<NavLink 
				to={ path } 
				className={ ( { isActive } ) =>  isActive ? `${ cl.link } ${ cl.active }` : cl.link  }
			>{ name }</NavLink>
		</li>
	)
}
