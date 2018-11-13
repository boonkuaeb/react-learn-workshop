import React, {Component} from 'react';
import Todo from "./Todo";
import {updateTodo} from "../../actions/TodoAction";
import connect from "react-redux/es/connect/connect";


class TodoList extends Component {
    state = {date: null, isRefreshData: false};

    componentWillUpdate = (nextProps, nextState) => {
        console.log(nextState);
        if (nextState.isRefreshData === true && this.state.isRefreshData === false) {
            this.props.reloadData();
        }
    };

    handleIsPin = (todo) => {
        let isPin = !todo.isPin;
        const data = {
            id: todo.id,
            isPin: isPin,
            userId: localStorage.getItem('access-token'),
            taskName: todo.taskName,
            isSuccess: todo.isSuccess
        };
        this.props.updateTodo(data);
        this.setState({isRefreshData:true});
    };


    render() {
        const data = this.props.data;

        return (
            <div className="App-Todos">
                <ul className="list-group list">
                    {data && data.map(todo => {
                        return (
                            <Todo key={todo.id} data={todo} handleIsPin={this.handleIsPin}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

// Retrieve state in the store as a props component.
function mapStateToProps(state) {
    return {todos: state.data}
}

export default connect(mapStateToProps, {updateTodo})(TodoList);

