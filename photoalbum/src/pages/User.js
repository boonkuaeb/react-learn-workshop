import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadUsers} from "../actions/UserAction";
import UserList from './../components/user/UserList'

class User extends Component {
    componentDidMount() {
        this.props.dispatch(loadUsers())
    }

    render() {
        const {users} = this.props;
        let list = <div>Loading...</div>;
        if (!users.isFailed && users.data) {
            if (users.data.length > 0) {
                list = <UserList data={users.data}/>
            }
        }

        if (users.isFailed) {
            list = <h4>Error: {users.data}</h4>
        }

        return (

            <div className="App">
                <h1>User List:</h1>
                {list}
            </div>
        );
    }

}

// Retrieve state in the store as a props component.
function mapStateToProps(state) {
    return {users: state.users}
}

export default connect(mapStateToProps)(User);
