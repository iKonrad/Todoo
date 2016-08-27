var React = require('react');
var ReactDOM = require('react-dom');

var {FormControl, Checkbox} = require('react-bootstrap');

var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({

	render: function() {
        var {dispatch, showCompleted, searchText} = this.props;

		return (
		<div>
			<div>
                <FormControl ref="searchText" type="search" placeholder="Search Todos" onChange={() => {
                    {/*var val = ReactDOM.findDOMNode(this.refs.todoText).value*/
                    }
                    var val = ReactDOM.findDOMNode(this.refs.searchText).value;
                    dispatch(actions.setSearchText(val));
                }} value={searchText}/>
			</div>
			<div className="togglebutton">
				<label>
                    <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                        dispatch(actions.toggleShowCompleted());
                    }}/>
					Show completed todos
				</label>
			</div>
		</div>
		);
	}
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);
