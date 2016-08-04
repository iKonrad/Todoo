var expect = require('expect');
var reducers = require('reducers');
var moment = require('moment');

describe('Reducers', () => {
	describe('searchReducer', () => {
		
		it ('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};

			var res = reducers.searchReducer('', action);
			expect(res).toEqual(action.searchText);
		});
	});

	describe ('showCompletedReducer', () => {
		it ('should toggle show completed', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};

			var res = reducers.showCompletedReducer(false, action);
			expect(res).toEqual(true);
		});
	});

	describe ('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'walk the dog'
			};

			var res = reducers.todosReducer([], action);

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		});

		it ('should toggle todo', () => {

			var state = [
				{
					id: '4d2234-42d34-3-4-34-34-d24',
					text: 'walk the dog',
					completedAt: undefined,
					completed: false,
					createdAt: moment().unix()

				}
			];
			var action = {
				type: 'TOGGLE_TODO',
				id: '4d2234-42d34-3-4-34-34-d24'
			};

			var res = reducers.todosReducer(state, action);
			expect(res[0].completed).toEqual(true);
			expect(res[0].completedAt).toNotEqual(undefined);
		});
	});
});