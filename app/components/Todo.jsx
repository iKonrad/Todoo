var React = require('react');
var $ = require('jquery');

var Todo = React.createClass({
	componentDidMount: function() {
		// Refresh material elements
		if (typeof $.material !== 'undefined') {
			$.material.init();
		}
	},

	render: function() {
		var {text, id, completed} = this.props;
		return(
			<div className="checkbox" >
				<label>
				<input type="checkbox" ref="c" defaultChecked={completed} onChange={() => { this.props.onToggle(id) }}/>
					{text}
				</label> 
			</div>
		);
	}
});

module.exports = Todo;