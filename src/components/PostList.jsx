import React from "react";
import PostItem from "./PostItem";

export const PostList = ( { posts, title, deletePost } ) => {
	if( posts.length ) {
		return(
			<div>
				<h1 style={ { textAlign: 'center' } }>{ title }</h1>

				{
					posts.map( ( post ) => 
						<PostItem 
							deletePost={ deletePost } 
							number={ post.id } 
							post={ post } 
							key={ post.id }
						/> )
				}
			</div>
		);
	}
	else {
		return (
			<h1 style={ { textAlign: "center" } }>Post's not found</h1>
		);
	}
}
