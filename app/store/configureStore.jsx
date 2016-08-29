import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchReducer, showCompletedReducer, todosReducer} from 'reducers';


export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		searchText: searchReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	return redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f ));
};