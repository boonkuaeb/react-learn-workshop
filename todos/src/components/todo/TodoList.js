import React, {Component} from 'react';
import Todo from "./Todo";

class TodoList extends Component {

    render() {
        const data = this.props.data;

        return (
            <div className="App-Todos">
                {data && data.map(todo => {
                    return (
                            <Todo key={todo.id} data={todo}/>
                    )
                })}
            </div>
        );
    }
}

export default TodoList;
