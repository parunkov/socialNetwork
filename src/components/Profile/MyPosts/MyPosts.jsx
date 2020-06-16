import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	// console.log(props);

	const posts = props.postsData.map(p => <Post text={p.text} likesCount={p.likesCount} />);

	const newPostElement = React.createRef();
	const addPost = () => { 
		props.addPost();
	}
	const onInputChange = () => {
		const text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={classes.postBlock}>
			<div className="">
				<h3>My posts</h3>
				<div className="">New post</div>
				<div className="">
					<textarea ref={newPostElement} onChange={onInputChange} cols="30" rows="5" value={props.newPostText} />
				</div>
				<div className={classes.btn}>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			{posts}
		</div>
	);
}

export default MyPosts;