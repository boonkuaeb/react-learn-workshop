import React, {Component} from 'react';
import Photo from "./Photo";

class PhotoList extends Component {

    render() {
        const data = this.props.data;
        return (
            <div className="row">
                {data && data.map(photo => {
                    return (
                        <Photo key={photo.id} data={photo}/>
                    )
                })}
            </div>
        );
    }
}

export default PhotoList;
