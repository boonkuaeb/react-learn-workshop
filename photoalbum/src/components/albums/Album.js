import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Album extends Component {
    render() {
        const data = this.props.data;
        return (
            <li className="list-group-item">
                <Link to={`/album/${data.id}/photo?albumname=${data.title}`}>{data.title}</Link>
            </li>
        );
    }
}

export default Album;
