// import {userAPI} from '../api/api';

// userAPI.getUser(1, 1).then((result) => {
// 	const totalCount = result.totalCount;
// 	const pagesCount = Math.ceil(totalCount/100);
// 	// const frends = result.items.filter(item => item.followed)
// 	// console.log(frends);
// 	console.log(pagesCount);
// 	const promiseItems = [];
// 	for (let i = 0; i < totalCount; i += 1) {
// 		promiseItems.push(userAPI.getUser(i + 1, 100))
// 	}

// 	let promise = Promise.all(promiseItems).then((result) => {
// 		console.log(1);
// 	})
// 	// 	// for (let i = 0; i < pagesCount; i += 1) {

// 	// 	// }
// 	// )

// });

const initialState = {

}

const sidebarReducer = (state = initialState, action) => {
	return state;
}
export default sidebarReducer;