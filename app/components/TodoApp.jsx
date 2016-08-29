var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');


var TodoList = require('TodoList');

import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
    render: function () {
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
                                        <TodoSearch />
                                    </div>
                                    <div className="todo-element" style={{'marginTop': '40px'}}>
                                        <TodoList className="todo-element"/>
                                    </div>
                                    <div className="todo-element">
                                        <AddTodo className="todo-element"/>
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
