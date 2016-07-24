var React = require('react');
var ReactDOM = require('react-dom');

var {FormControl, Checkbox} = require('react-bootstrap');

var TodoSearch = React.createClass({
	handleSearch: function() {
		console.log('called');
		var showCompleted = ReactDOM.findDOMNode(this.refs.showCompleted).checked;
		var searchText = ReactDOM.findDOMNode(this.refs.searchText).value;
		console.log(showCompleted);
		console.log(searchText);
		this.props.onSearch(showCompleted, searchText);
	},
	render: function() {
		return (
		<div>
			<div>
				<FormControl ref="searchText" type="search" placeholder="Search Todos" onChange={this.handleSearch}/>
			</div>
			<div className="togglebutton">
				<label>
					<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
					Show completed todos
				</label>
			</div>
		</div>
		);
	}
});

module.exports = TodoSearch;