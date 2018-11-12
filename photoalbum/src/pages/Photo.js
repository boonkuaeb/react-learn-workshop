import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadPhotos} from "../actions/AlbumAction";
import PhotoList from '../components/photos/PhotoList'

class Photo extends Component {

    componentDidMount() {
        this.props.dispatch(loadPhotos(this.props.match.params.id))
    }

    render() {
        const albumname = new URLSearchParams(this.props.location.search).get("albumname");
        const {photos} = this.props;
        let list = <div>Loading ...</div>;
        if (!photos.isFailed && photos.data && !photos.isLoading) {
            if (photos.data.length > 0) {
                list = <PhotoList data={photos.data}/>
            }
        }

        if (photos.isFailed) {
            list = <h4>Error: {photos.data}</h4>
        }

        return (
            <div className="App">
                <h1>Album {albumname} (Album Id: {this.props.match.params.id})</h1>
                {list}
            </div>
        );
    }

}


// Retrieve state in the store as a props component.
function mapStateToProps(state) {
    return {photos: state.photos}
}

export default connect(mapStateToProps)(Photo);
