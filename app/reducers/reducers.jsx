var uuid = require('node-uuid');
var moment = require('moment');

export var searchReducer = (state = '', action) => {
	switch(action.type) {
		case 'SET_SEARCH_TEXT': 
			return action.searchText;
		default: 
			return state;
	}
};

export var showCompletedReducer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state
		break;
		default:
			return state;
	}
};

export var todosReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
			...state, 
			{
				id: uuid(),
				text: action.text,
				completed: false,
				createdAt: moment().unix(),
				completedAt: undefined
			}
			]
		break;
		case 'TOGGLE_TODO':
			var oldtodo = state.filter((todo) => todo.id === action.id);
			return state.map((todo) => {
				if (todo.id === action.id) {
					var nextCompleted = !todo.nextCompleted;

					return {
						...todo,
						completed: nextCompleted,
						completedAt: nextCompleted ? moment().unix() : undefined
					}
				}
			});
		break;
		default:
		return state;
		break;
	}
};