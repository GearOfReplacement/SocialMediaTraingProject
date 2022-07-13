import React, { useEffect, useState } from "react";
import { usePosts } from './components/hooks/usePost';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import MyModal from './components/UI/modal/MyModal';
import MyButton from "./components/UI/button/MyButton";
import PostService from "./API/PostService";

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const deletePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	async function fetchPosts() {
		const posts = await PostService.getAll();
		setPosts(posts);
	}
	
	useEffect(() => {
		fetchPosts();
	}, []);
	
  return (
    <div className="App">
			<MyButton style={{marginTop: 30, marginBottom: 30}} onClick={ () => {setModal(true)} }>Create post</MyButton>

			<MyModal visible={modal} setVisible={setModal}> 
				<PostForm createPost={createPost} />
			</MyModal>

			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>

			<PostList deletePost={deletePost} posts={ sortedAndSearchedPosts } title="Post's for yuor query:"/>
    </div>
  );
}

export default App;
