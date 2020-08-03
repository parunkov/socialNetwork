const initialState = {
	news: [
		{id: 1, date: new Date(2020, 7, 3, 13, 28), title: 'Начало', text:  'Начал делать news-reducer'}
	]
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default newsReducer;