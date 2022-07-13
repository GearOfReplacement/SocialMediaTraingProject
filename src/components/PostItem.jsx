import React from "react";
import MyButton from "./UI/button/MyButton";


function PostItemt ( { number, post, deletePost } ) {


	return (
		<div className="post">
			<div className="post__content">
				<strong>{ number }. { post.title }</strong>
				<div>{ post.body }</div>
			</div>

			<div className="post__btns">
				<MyButton onClick={ () => { deletePost( post ) } }>
					Delete post
				</MyButton>
			</div>
		</div>
	);
}

export default PostItemt;