var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();

// Load Foundation

// require('bootstrap/dist/css/bootstrap.min.css');
// require('public/assets/css/material-kit.css');
require('bootstrapjs');
require('react-bootstrap');

require('style!css!sass!appStyle');

store.subscribe(() => {
    console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean the yeard'));
store.dispatch(actions.setSearchText('yard'));

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

