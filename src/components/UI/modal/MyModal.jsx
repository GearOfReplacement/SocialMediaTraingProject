import React from "react";
import cl from './MyModal.module.css';

export const MyModal = ( { children, visible, setVisible } ) => {
	const rootStyle = [cl.myModal];

	if( visible ){
		rootStyle.push( cl.active );
	}

	return (
		<div className={ rootStyle.join(' ') } onClick={ () => { setVisible ( false ) } }>
			<div className={ cl.myModalContent } onClick={ ( e ) => { e.stopPropagation() } }>
				{ children }
			</div>
		</div>
	)

}
