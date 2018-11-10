import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
    // static childContextTypes = {
    //     color: PropTypes.string
    // };

    getChildContext = () => {
        return {
            color: "pink"
        }
    };

    render() {
        return (
            <div className="App-TodoList">
                {
                    this.props.data.map((todo, i) =>
                        <Todo key={i} text={todo}/>
                    )
                }
            </div>
        );
    }
}

TodoList.childContextTypes = {
    color: PropTypes.string
};

export default TodoList;
