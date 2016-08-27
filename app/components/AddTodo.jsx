var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var ReactDOM = require('react-dom');

var {FormControl, Button} = require('react-bootstrap');

export var AddTodo = React.createClass({

	onSubmit: function(e) {
		e.preventDefault();
		var {dispatch} = this.props;

		var text = ReactDOM.findDOMNode(this.refs.todoText).value;

		if (text.length > 0) {
			dispatch(actions.addTodo(text));
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

export default connect()(AddTodo);