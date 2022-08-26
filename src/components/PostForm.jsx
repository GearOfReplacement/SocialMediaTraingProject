import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import { MyButton } from "./UI/button/MyButton";

export const PostForm = ( { createPost } ) => {
	const [ post, setPost ] = useState( { title: '', body: '' } );

	function addNewPost (e) {
		e.preventDefault();

		const newPost = {
			...post,
			id: Date.now(),
		}

		createPost( newPost );
		setPost( { title: '', body: '' } );
	}

	return (
		<form>
			<MyInput 
				type="text" 
				placeholder="Post's name"
				onChange={ (e) => setPost( { ...post, title: e.target.value } ) }
				value={ post.title }
			/>

			<MyInput 
				type="text" 
				placeholder="Post's description"
				onChange= { (e) => setPost( { ...post, body: e.target.value } ) }
				value= { post.body }
			/>
		
			<MyButton onClick={ addNewPost }>Create post</MyButton>
	</form>
	);
}
