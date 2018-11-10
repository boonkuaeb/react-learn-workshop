import React, {Component} from 'react';

class User extends Component {
    render() {
        const data = this.props.data;
        return (
            <h3 id={data.id}>{data.name} | {data.email}</h3>
        );
    }
}

export default User;
