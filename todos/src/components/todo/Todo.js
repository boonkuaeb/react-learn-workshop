import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFlag, faFlagCheckered} from '@fortawesome/free-solid-svg-icons'
import './Todo.css';


class Todo extends Component {

    state = {
        todo: this.props.data
    };

    handleIsPin=()=> {
        this.props.handleIsPin(this.state.todo);
    };
    handleComplete = (e) => {
    };


    render() {
        const todo = this.props.data;

        let clsName = 'list-group-item justify-content-between align-items-center';
        let clsText = '';
        let clsfaFlag = '';


        if (todo.isSuccess) {
            clsName = 'list-group-item justify-content-between align-items-center checked';
            clsText = 'text-white';
        }

        if (todo.isPin && !todo.isSuccess) {
            clsName = 'list-group-item justify-content-between align-items-center highlight';
            clsfaFlag = 'text-warning';
        }

        return (
            <li key={todo.id} className={clsName}>
                {
                    (todo.isSuccess) ?
                        <FontAwesomeIcon icon={faFlagCheckered}/>
                        :
                        <FontAwesomeIcon
                            className={clsfaFlag}
                            icon={faFlag}
                            onClick={this.handleIsPin}/>
                }
                <span className={clsText}> {todo.taskName}{" "}</span>
                {!todo.isSuccess ?
                    <button
                        type="button"
                        className="btn btn-success btn-sm float-sm-right"
                        onClick={this.handleComplete}
                    >Completes Task</button> : ''}

            </li>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        data: props.data
    }
}


export default connect(mapStateToProps)(Todo);
