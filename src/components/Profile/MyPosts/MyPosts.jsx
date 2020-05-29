import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	const posts = props.postsData.map(p => <Post text={p.text} likesCount={p.likesCount} />);

	return (
		<div className={classes.postBlock}>
			<div className="">
				<h3>My posts</h3>
				<div className="">New post</div>
				<div className="">
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
				<div className={classes.btn}>
					<button>Add post</button>
				</div>
			</div>
			{posts}
		</div>
	);
}

export default MyPosts;