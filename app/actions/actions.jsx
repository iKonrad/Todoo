import moment from 'moment';
import firebase, {db} from 'app/firebase/';

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

// toggleShowCompleted
export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	}
};

export var startAddTodos = (todos) => {
	return (dispatch, getState) => {
		db.child('todos').once('value').then((snapshot) => {
			var todos = snapshot.val() || {};
			var todokeys = Object.keys(todos);
			var todoarray = [];

			Object.keys(todos).forEach((todoId) => {
				todoarray.push({
					id: todoId,
					...todos[todoId]
				});
			});

			dispatch(addTodos(todoarray));
		});

	}
};

export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		var todo = {
			text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		var todoRef = db.child('todos').push(todo);
		todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});
	}
};

export var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};

export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var todoRef = db.child(`todos/${id}`);

		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};

		todoRef.update(updates).then(() => {
			console.log('okokoko');
			dispatch(updateTodo(id, updates));
		});


	}
};