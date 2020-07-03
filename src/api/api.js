import * as axios from 'axios';

const instance = axios.create ({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "835d872a-f736-4d6d-9d7e-efec24ff176d"
	}
});

export const userAPI = {
	getUser(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data
		});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => {
			return response.data
		});
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => {
			return response.data
		});
	},
	checkLogin() {
		return instance.get(`auth/me`).then(response => {
			return response.data
		});
	}
}
