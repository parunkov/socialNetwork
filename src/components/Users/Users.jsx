import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/i.webp';

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {

		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		const pages = [];

		for (let i = 1; i <= pagesCount ; i += 1) {
			pages.push(i);
		}

		return (

			<div>
				<div>
					{
						pages.map(p => {
							return <span className={this.props.currentPage === p && styles.selectedPage} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
						})
					}
				</div>
				{
					this.props.users.map(u => <div key={u.id}>
						<span>
							<div>
								<img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="fff" />
							</div>
							<div>
								{u.followed ? 
									<button onClick={() => {
										this.props.follow(u.id);
									}}>Unfollow</button>
									: <button button onClick={() => {
										this.props.unfollow(u.id);
									}}>Follow</button>}
							</div>
						</span>
						<span>
							<span>
								<div className="">{u.name}</div>
								<div className="">{u.status}</div>
							</span>
							<span>
								<div className="">{"u.location.city"}</div>
								<div className="">{"u.location.country"}</div>
							</span>
						</span>
					</div>)
				}
			</div>
		);
	}
}

export default Users;