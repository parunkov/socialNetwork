import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src="https://www.1zoom.ru/big2/30/147941-aleni.jpg" alt=""/>
			{props.text}
			<div className="">
				<span>Like {props.likesCount}</span>
			</div>
		</div>
	);
}

export default Post;
