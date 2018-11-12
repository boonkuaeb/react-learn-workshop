import React, {Component} from 'react';
import Album from "./Album";

class AlbumList extends Component {

    render() {
        const data = this.props.data;
        return (
            <div className="App-UserList">
                {data && data.map(album=>{
                    return (
                        <Album key={album.id} data={album} />
                    )
                })}
            </div>
        );
    }
}

export default AlbumList;
