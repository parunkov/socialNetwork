import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo((props) => {

	const maxLength10 = maxLengthCreator(10);

	const posts = [...props.postsData].reverse().map(p => <Post text={p.text} key={p.id} likesCount={p.likesCount} {...props} />);

	const PostForm = (props) => {
		return(
			<form onSubmit={props.handleSubmit}>
				<div className="">
					<Field component={Textarea} name={"post"} cols="30" rows="5" placeholder="Add post" validate={[required, maxLength10]} />
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
});

export default MyPosts;
