import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadTodos} from "../actions/TodoAction";
import TodoList from '../components/todo/TodoList'

class Todo extends Component {
    componentDidMount() {
        this.props.dispatch(loadTodos())
    }

    render() {
        const {todos} = this.props;
        let list = <div>Loading...</div>;
        if (!todos.isFailed && todos.data) {
            if (todos.data.length > 0) {
                list = <TodoList data={todos.data}/>
            }
        }

        if (todos.isFailed) {
            list = <h4>Error: {todos.data}</h4>
        }

        return (

            <div className="App">
                <h1>Todo List:</h1>
                <ul className="list-group">
                {list}
                </ul>
            </div>
        );
    }

}

// Retrieve state in the store as a props component.
function mapStateToProps(state) {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(Todo);
