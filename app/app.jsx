var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load Foundation

// require('bootstrap/dist/css/bootstrap.min.css');
// require('public/assets/css/material-kit.css');
require('bootstrapjs');
require('react-bootstrap');

require('style!css!sass!appStyle');

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  	</Route>
  </Router>,
  document.getElementById('app')
);

