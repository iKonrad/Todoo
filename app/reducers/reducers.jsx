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
				action.todo
			]
		break;
		case 'ADD_TODOS':
			if (action.todos.length > 0) {
				return [
					...state,
					...action.todos
				];
			} else {
				return state;
			}

			break;
		case 'UPDATE_TODO':
			var oldtodo = state.filter((todo) => todo.id === action.id);
			return state.map((todo) => {
				if (todo.id === action.id) {
					return {
                        ...todo,
                        ...action.updates
                    };
				} else {
					return todo;
				}
			});
		break;
		default:
		return state;
		break;
	}
};