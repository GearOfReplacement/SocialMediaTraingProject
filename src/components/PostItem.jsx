import React from "react";
import { MyButton } from "./UI/button/MyButton";

import { useNavigate } from 'react-router-dom';

function PostItemt ( { number, post, deletePost } ) {

	const navigate = useNavigate();

	return (
		<div className="post">
			<div className="post__content">
				<strong>{ number }. { post.title }</strong>
				<div>{ post.body }</div>
			</div>

			<div className="post__btns">
				<MyButton onClick={ () => { navigate(`/Post/${number}`); } }>
					Open post
				</MyButton>
				<MyButton onClick={ () => { deletePost( post ) } }>
					Delete post
				</MyButton>
			</div>
		</div>
	);
}

export default PostItemt;
