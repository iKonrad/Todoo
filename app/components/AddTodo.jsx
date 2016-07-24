var React = require('react');
var ReactDOM = require('react-dom');

var {FormControl, Button} = require('react-bootstrap');

var AddTodo = React.createClass({


	onSubmit: function(e) {
		e.preventDefault();
		var text = ReactDOM.findDOMNode(this.refs.todoText).value;

		if (text.length > 0) {
			this.props.onAddTodo(text);
			ReactDOM.findDOMNode(this.refs.todoText).value = '';
		} else {
			ReactDOM.findDOMNode(this.refs.todoText).focus();
		}
	},
	render: function() {
		return (
			<div>

				<form onSubmit={this.onSubmit}>
				<FormControl ref="todoText" placeholder="What you need to do?" />
				<Button className="btn-block" type="submit" bsStyle="info">Add</Button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;