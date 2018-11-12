import React, {Component} from 'react';

class Photo extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                <h4>{data.id}: {data.title}</h4>
                <img src={data.thumbnailUrl} alt="{data.title}"/>
            </div>
        );
    }
}

export default Photo;
