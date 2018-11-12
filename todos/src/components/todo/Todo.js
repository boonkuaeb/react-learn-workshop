import React, {Component} from 'react';


class Todo extends Component {
    render() {
        const data = this.props.data;
        return (
            <li className="list-group-item">
                {data.taskName}{" "}{data.id}
            </li>
        );
    }
}

export default Todo;
