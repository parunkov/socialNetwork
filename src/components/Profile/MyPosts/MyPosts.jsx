import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	const postsData = [
		{id: 1, text: 'Hi. How are you?', likesCount: 12},
		{id: 2, text: "It's my first post.", likesCount: 11}
	]
	console.log(postsData);

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
			<Post text={postsData[0].text} likesCount={postsData[0].likesCount}/>
			<Post text={postsData[1].text} likesCount={postsData[1].likesCount}/>
			<Post />
			<Post />
		</div>
	);
}

export default MyPosts;