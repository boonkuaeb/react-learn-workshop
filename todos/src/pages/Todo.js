import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadTodos} from "../actions/TodoAction";
import TodoList from '../components/todo/TodoList'

class Todo extends Component {
    state = {
        profile: ''
    };
    componentWillMount = () => {
        // https://api.line.me/v2/profile
        fetch(`https://api.line.me/v2/profile`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('access-token')
            }
        })
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => {
                localStorage.setItem('userId', result.userId);
                this.setState({
                    profile: result
                })
            })
            .catch(e => {

            })

    };
    reloadData = () => {
        this.props.dispatch(loadTodos())
    };

    componentDidMount() {
        this.reloadData();
    }

    render() {
        const {todos} = this.props;
        let list = <div>Loading...</div>;
        if (!todos.isFailed && todos.data) {
            if (todos.data.length > 0) {
                list = <TodoList data={todos.data} reloadData={this.reloadData}/>
            } else {
                list = <div>No Data</div>
            }
        }

        if (todos.isFailed) {
            list = <h4>Error: {todos.data}</h4>
        }

        return (

            <div className="App">

                <div className="col-md-2 offset-md-5">
                    <div className="text-center">
                        <img className="card-img-top forum-card-img-top  rounded-circle img-fluid img-thumbnail"
                             src={this.state.profile.pictureUrl} alt={this.state.profile.displayName}/>
                    </div>
                </div>
                <div className="col-md-4 offset-md-4 text-center">
                    <div className="card-body forum-card-body">
                        <h4 className="card-title"> {this.state.profile.displayName} </h4>
                        <p className="card-text">{this.state.profile.statusMessage}</p>
                    </div>
                </div>
                {list}
            </div>
        );
    }

}

// Retrieve state in the store as a props component.
function mapStateToProps(state) {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(Todo);
