import React, {Component} from 'react';
import User from "./User";

class UserList extends Component {

    render() {
        const data = this.props.data;
        return (
            <div className="App-UserList">
                {data && data.map(user => {
                    return (
                        <ul className="list-group">
                            <User key={user.id} data={user}/>
                        </ul>
                    )
                })}
            </div>
        );
    }
}

export default UserList;
