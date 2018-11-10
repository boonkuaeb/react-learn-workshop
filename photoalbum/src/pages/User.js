import React, {Component} from 'react';
import UserList from './../components/user/UserList'
class User extends Component {

    state = {data: null, error: null};

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => this.setState({data: result}))
            .catch(error => this.setState({error: error.message}))
    }

    render() {

        const {data, error} = this.state;
        let list = <div>Loading...</div>;

        if (data) {
            if (data.length > 0) {
                list = <UserList data={data}/>
            } else {
                list = <div>No Data</div>
            }
        }

        if (error) {
            list = <div>Error happening: {error}</div>
        }

        return (
            <div className="App">
                <h1>User List:</h1>
                {list}
            </div>
        );
    }

}

export default User;
