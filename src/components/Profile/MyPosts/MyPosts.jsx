import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';

const MyPosts = (props) => {

	const posts = props.postsData.map(p => <Post text={p.text} key={p.id} likesCount={p.likesCount} />);

	const PostForm = (props) => {
		return(
			<form onSubmit={props.handleSubmit}>
				<div className="">
					<Field component={"textarea"} name={"post"} cols="30" rows="5" placeholder="Add post" />
				</div>
				<div className={classes.btn}>
					<button type="submit">Add post</button>
				</div>
			</form>
		);
	}
	const PostReduxForm = reduxForm ({
		form: 'post'
	})(PostForm);

	const onSubmit = (formData) => {
		props.addPost(formData.post);

	}

	return (
		<div className={classes.postBlock}>
			<div className="">
				<h3>My posts</h3>
				<div className="">New post</div>
				<PostReduxForm onSubmit={onSubmit} />
			</div>
			{posts}
		</div>
	);
}

export default MyPosts;
