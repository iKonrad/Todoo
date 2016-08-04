var React = require('react');
var $ = require('jquery');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({
    componentDidMount: function () {
        // Refresh material elements
        if (typeof $.material !== 'undefined') {
            $.material.init();
        }
    },

    render: function () {
        var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
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

        return (
            <div className={todoClassName}>
                <label>

                    <input type="checkbox" ref="c" defaultChecked={completed} onClick={() => {
                        dispatch(actions.toggleTodo(id));
                    }} />


                    <p style={{'marginBottom': '-10px'}}>{text}</p><br />
                    <p className="todo-task-date">{renderDate()}</p>

                </label>
            </div>
        );
    }
});

export default connect()(Todo);
