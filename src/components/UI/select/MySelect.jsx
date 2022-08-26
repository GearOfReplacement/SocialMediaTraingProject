import React from "react";

export const MySelect = ( { options, defaultValue, value, onChange, ...props } ) => {

	return (
		<select {...props} value={ value } onChange={ ( e ) => { onChange( e.target.value ) } }>
			<option disabled value="">{ defaultValue }</option>
			{
				options.map( ( option ) => 
					<option key={option.value} value={ option.value }>
						{ option.name }
					</option>
				)
			}
		</select>
	)
}
