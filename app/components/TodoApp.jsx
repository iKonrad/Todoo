var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');

import AddTodo from 'AddTodo';

var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });

    },
    render: function () {

        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        // Filter by showCompleted
        if (!showCompleted) {
            filteredTodos = filteredTodos.filter((todo) => {
                return !todo.completed ? true : false;
            });
        }

        // Filter by search test
        if (searchText.length > 0) {
            filteredTodos = filteredTodos.filter((todo) => {
                var todoText = todo.text.toLowerCase();
                return todoText.indexOf(searchText) > -1;
            });
        }
        // Sort todos with noncompleted first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }

        });

        return (
            <div>
                <div className="main" style={{paddingBottom: '50px', 'paddingTop': '30px'}}>
                    <div className="sections">
                        <div className="container">
                            <div className="title">

                            </div>
                            <div className="col col-xs-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
                                <h2>Todoo</h2>
                                <div className="todo-container">
                                    <div className="todo-element">
                                        <TodoSearch onSearch={this.handleSearch}/>
                                    </div>
                                    <div className="todo-element" style={{'marginTop': '40px'}}>
                                        <TodoList className="todo-element"/>
                                    </div>
                                    <div className="todo-element">
                                        <AddTodo onAddTodo={this.handleAddTodo} className="todo-element"/>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
                <footer className="footer">
                    <div className="container">
                        <center>Made by Konrad Jarosinski</center>
                    </div>
                </footer>
            </div>
        );
    }
});


module.exports = TodoApp;
