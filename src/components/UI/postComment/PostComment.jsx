import React from "react";
import cl from "./PostComment.module.css";

export const PostComment = ({ number, name, email, body }) => {

	return (
		<div className={cl.comment}>
			<h3 className={cl.title}><span>{number}.</span> {name}</h3>
			<div className={cl.body}>{body}</div>
			<div className={cl.email}>{email}</div>
		</div>
	);

}
