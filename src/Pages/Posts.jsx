import React, { useEffect, useState } from "react";

import { PostService } from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePost";
import { getTotalPages } from "../utils/getTotalPages";

import { PostFilter } from "../components/PostFilter";
import { PostForm } from "../components/PostForm";
import { PostList } from "../components/PostList";

import { MyButton } from "../components/UI/button/MyButton";
import { MyModal }  from "../components/UI/modal/MyModal";
import { MySelect } from "../components/UI/select/MySelect";

import { Pagination } from "../components/UI/pagination/Pagination";
import { Loader } from "../components/UI/loader/Loader";


export const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);

	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const totalResultsLoad = [
		{value: 10, name: 'results: 10'},
		{value: 25, name: 'results: 25'},
		{value: 50, name: 'results: 50'},
		{value: 100, name: 'results: 100'},
	];

	const [ fetching, load, error ] = useFetching( async () => {
		const response = await PostService.getAll(limit, page);
		setPosts( response.data );
		setTotalPages( getTotalPages( Number( response.headers['x-total-count'] ), limit ) );
	});

	const createPost = ( newPost ) => {
		setPosts( [...posts, newPost] );
		setModal( false );
	}

	const deletePost = ( post ) => {
		setPosts( posts.filter( p => p.id !== post.id ) );
	}

	useEffect(() => {
		fetching();
	}, [page, limit]);
	
  return (
    <div className="App">
			<MyButton className="create__btn" onClick={ () => { setModal( true ) } }>Create post</MyButton>

			<MyModal visible={modal} setVisible={setModal}> 
				<PostForm createPost={createPost} />
			</MyModal>

			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>

			<MySelect
				className="select__page"
				defaultValue="Select page limit:"
				options={totalResultsLoad}
				value={ limit }
				onChange={ ( sortType ) => { setLimit( sortType ) }}
			/>

			{
				error && <h1>Error: {error}</h1>
			}
			{
				load
					? <div className="loader"><Loader/></div>
					: <PostList deletePost={deletePost} posts={ sortedAndSearchedPosts } title="Post's for yuor query:"/>
			}
			<Pagination 
				totalPages={totalPages}
				currentPage={page}
				changePage={setPage}
			/>
    </div>
  );
}
