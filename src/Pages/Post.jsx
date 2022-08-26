import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { Loader } from "../components/UI/loader/Loader";
import { CommentsList } from "../components/CommentsList";
import cl from './Post.module.css';

export const Post = () => {
	const p = useParams();
	const [post, setPost] = useState({});

	const [fetching, load, error] = useFetching( async () => {
		const response = await PostService.getPost( p.id );
		setPost(response.data);
	})

	useEffect( () => {
		fetching();
	}, []);

	return (
		<div>
			{
				error && <h1>Error: {error}</h1>
			}
			{
				load
					? <div className={cl.loader}><Loader/></div>
					: <div className={cl.post} >
							<h1 className={cl.title} ><span> { post.id }. </span> { post.title }</h1>
							<div className={cl.descr} >{ post.body }</div>
							<CommentsList pageId={ p.id }/>
						</div>
			}
		</div>
	);
}
