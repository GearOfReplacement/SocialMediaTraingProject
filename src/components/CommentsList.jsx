import React, { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import { PostService } from "../API/PostService";
import { Loader } from "./UI/loader/Loader";
import { PostComment } from "./UI/postComment/PostComment";
import cl from './CommentsList.module.css';

export const CommentsList = ( {	pageId	}	) => {
	const [postComments, setPostComments] = useState([]);

	const [getComments, load, error] = useFetching(async () => {
		const response = await PostService.getPostComent( pageId );
		setPostComments(response.data);
	});

	useEffect(() => {
		getComments();
	}, []);

	return (
		<div>
			{
				error && <h1>Error: {error}</h1>
			}
			{
				load 
				? <div className={cl.loader}><Loader/></div>
				: <div className={cl.comments}>
						<h2 className={cl.subtitle}>Comments:</h2>
						{
							postComments.map( (comment, index) => 
								<PostComment 
									key={comment.id} 
									number={index + 1}
									name={comment.name}
									email={comment.email}
									body={comment.body}
								/>
							)
						}
					</div>
			}
		</div>
	)
}
