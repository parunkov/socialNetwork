import React from 'react';

const FollowButton = ({followed, userId, followingInProgress, unfollow, follow}) => {
	return (
		<div>
			{followed ? 
				<button disabled={followingInProgress.some(id => id === userId)} onClick={() => {
					unfollow(userId);
				}}>Unfollow</button>
				: <button disabled={followingInProgress.some(id => id === userId)} button onClick={() => {
					follow(userId);
				}}>Follow</button>}
		</div>
	)
}

export default FollowButton;