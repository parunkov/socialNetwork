import React from 'react';
import styles from './Post.module.scss';

const Post = (props) => {
	return (
		<div className={styles.item}>
			<div className={styles.imgWrapper}>
				<img src={props.postPhoto} alt=""/>
				<div className={styles.likeWrapper}>
					<span className={styles.like}></span>
					<span>{props.likesCount}</span>
				</div>
			</div>
			<div className={styles.textWrapper}>
				{props.text}
			</div>
		</div>
	);
}

export default Post;
