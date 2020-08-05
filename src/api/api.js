import * as axios from 'axios';

const instance = axios.create ({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "835d872a-f736-4d6d-9d7e-efec24ff176d",
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
	checkFollowing(userId) {
		return instance.get(`follow/${userId}`).then(response => {
			return response.data
		});
	},
	checkLogin() {
		return instance.get(`auth/me`).then(response => {
			return response.data
		});
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`/auth/login`, {email, password, rememberMe, captcha}).then(response => {
			return response.data;
		});
	},
	logout() {
		return instance.delete(`/auth/login`).then(response => {
			return response.data;
		});
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => {
			console.warn('Obsolete method. Please use profileAPI object.');
			return profileAPI.getProfile(userId);
		});
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => {
			return response.data
		});
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => {
			return response;
		});
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status: status}).then(response => {
			return response.data;
		});
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(response => {
			return response;
		});
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile);
	}

}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	}
}
