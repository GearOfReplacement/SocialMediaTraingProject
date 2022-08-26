import React from "react";
import classes from './MyButton.module.css';

export const MyButton = ( { children, className, ...props } ) => {

	return (
		<button { ...props } className={ className ? `${ classes.myBtn } ${ className }` : classes.myBtn }>
			{ children }
		</button>
	)

}
