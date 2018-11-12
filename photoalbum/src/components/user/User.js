import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class User extends Component {
    render() {
        const data = this.props.data;
        return (
            <li className="list-group-item">
                <Link to={`/user/${data.id}/album?username=${data.username}`}>{data.name} | {data.email}</Link>
            </li>
        );
    }
}

export default User;
