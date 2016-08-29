var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// Load Foundation

// require('bootstrap/dist/css/bootstrap.min.css');
// require('public/assets/css/material-kit.css');
require('bootstrapjs');
require('react-bootstrap');

require('style!css!sass!appStyle');
console.log(localStorage.getItem('todos'));
// store.subscribe(() => {
//     var state = store.getState();
//     console.log('New state', state);
//     TodoAPI.setTodos(state.todos);
// });


// var initialTodos = TodoAPI.getTodos();

store.dispatch(actions.startAddTodos());


// store.dispatch(actions.addTodos(initialTodos));



var TodoApp = require('TodoApp');
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={TodoApp}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

