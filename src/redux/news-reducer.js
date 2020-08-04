const ADD_NEWS = 'news/ADD_NEWS';

const initialState = {
	news: [
		{id: 1, date: new Date(2020, 7, 3, 13, 28), title: 'Lorem ipsum dolor sit amet', text:  'Illo iusto placeat aliquid tempore harum similique, quo deleniti, velit eum labore est a consectetur aut cum. Hic quo nobis aspernatur, iste ut voluptate voluptatum repudiandae! Aut architecto, eligendi, repellat asperiores voluptatibus odio deserunt dignissimos, dicta laudantium voluptatem minima praesentium sed tempore.'}
	]
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEWS: {
			return {
				...state,
				news: [ ...state.news,
				{
					date: action.date,
					title: action.title,
					text: action.text
				}]
			}
		}
		default:
			return state;
	}
}

export const addNews = (date, title, text) => ({
	type: ADD_NEWS,
	date: date,
	title: title,
	text: text
});

export default newsReducer;