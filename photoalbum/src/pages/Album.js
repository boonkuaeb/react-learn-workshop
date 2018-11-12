import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadAblums} from "../actions/AlbumAction";
import AlbumList from '../components/albums/AlbumList'

class Album extends Component {

    componentDidMount() {
        this.props.dispatch(loadAblums(this.props.match.params.id))
    }

    render() {
        const search = new URLSearchParams(this.props.location.search).get("username");

        const {albums} = this.props;
        let list = <div>Loading ...</div>;
        if (!albums.isFailed && albums.data) {
            if (albums.data.length > 0) {
                list = <AlbumList data={albums.data}/>
            }
        }

        if (albums.isFailed) {
            list = <h4>Error: {albums.data}</h4>
        }

        return (
            <div className="App">
                <h1>Album of {search} (UserId: {this.props.match.params.id})</h1>
                {list}
            </div>
        ) ;
    }

}


// Retrieve state in the store as a props component.
function mapStateToProps(state) {
    return {albums: state.albums}
}

export default connect(mapStateToProps)(Album);
