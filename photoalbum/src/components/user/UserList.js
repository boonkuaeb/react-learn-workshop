import React, {Component} from 'react';
import User from "./User";

class UserList extends Component {

    render() {
        const data = this.props.data;
        return (
            <div className="App-UserList">
                {data && data.map(user => {
                    return (
                        <User key={user.id} data={user}/>
                    )
                })}
            </div>
        );
    }
}

export default UserList;
