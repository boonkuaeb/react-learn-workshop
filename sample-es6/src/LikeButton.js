import React, {Component} from 'react';

class LikeButton extends Component {
    render() {
        return (
            <div className="App-LikeButton">
                <h1>This is LikeButton Component</h1>
                <button onClick={this.handleClickLikeInside}>{this.props.like ? 'Like Me' : 'Dislike Me'}</button>
            </div>
        );
    }

    handleClickLikeInside = () => {
        this.props.onClikeLike(this.props.like);
    }
}

export default LikeButton;
