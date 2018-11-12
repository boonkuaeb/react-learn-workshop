import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Album extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                <Link to={`/album/${data.id}/photo?albumname=${data.title}`}>{data.title}</Link>
            </div>
        );
    }
}

export default Album;
