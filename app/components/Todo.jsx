var React = require('react');
var $ = require('jquery');
var moment = require('moment');
var Todo = React.createClass({
	componentDidMount: function() {
		// Refresh material elements
		if (typeof $.material !== 'undefined') {
			$.material.init();
		}
	},

	render: function() {
		var {text, id, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'checkbox todo-task todo-completed' : 'checkbox todo-task';

		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;
			
			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		};

		return(
				<div className={todoClassName} >
					<label>

						<input type="checkbox" ref="c" defaultChecked={completed} onChange={() => { this.props.onToggle(id) }}/>


						<p style={{'marginBottom': '-10px'}}>{text}</p><br />
						<p className="todo-task-date">{renderDate()}</p>

					</label> 
				</div>
		);
	}
});

module.exports = Todo;