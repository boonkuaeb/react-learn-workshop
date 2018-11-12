import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class User extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                <Link to={`/ablums/detail/${data.id}`}>{data.title}</Link>
            </div>
        );
    }
}

export default User;
