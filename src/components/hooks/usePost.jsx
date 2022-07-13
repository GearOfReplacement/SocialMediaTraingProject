import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {

	const sortedPosts = useMemo( () => { 
		if(sort) {
			return [...posts].sort( ( item1, item2 ) => item1[sort].localeCompare( item2[sort] ) );
		}
		else return posts;
	
	} , [ sort, posts ]);

	return sortedPosts;
}


export const usePosts = (posts, sort, query) => {

	const sortedPosts = useSortedPosts(posts, sort);

	const sortedAndSearchedPosts = useMemo( () => {
		return sortedPosts.filter( post => post.title.toLowerCase().includes( query.toLowerCase() ) );
	} , [ query, sortedPosts ] );

	return sortedAndSearchedPosts;
}

