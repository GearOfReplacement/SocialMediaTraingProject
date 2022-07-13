import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter ( { filter, setFilter } ) {

	return (
		<div>
						
			<MyInput 
				placeholder="Search..."
				value={ filter.query }
				onChange={ (e) => { setFilter( {...filter, query: e.target.value } ) } }
			/>

			<MySelect 
				defaultValue="Sort by: "
				value={ filter.sort }
				onChange={ ( sortType ) => { setFilter( {...filter, sort: sortType } ) } }
				options={ [
					{ value: "title", name: "by title" },
					{ value: "body", name: 'by description' }
				] }
			/>
		</div>
	)
}

export default PostFilter;
