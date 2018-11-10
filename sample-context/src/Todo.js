import React, {Component} from 'react';
import Button from './Button';

class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.text}
                <Button>
                    Delete
                </Button>
            </div>
        );
    }
}

export default Todo;
