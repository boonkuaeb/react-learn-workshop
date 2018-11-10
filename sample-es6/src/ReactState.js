import React, {Component} from 'react';
import LikeButton from './LikeButton';

class ReactState extends Component {

    handleClick = (isLike) => {
        if (isLike === true) {
            this.setState((prevState, props) => {
                console.log(prevState);
                return {likeMe: prevState.likeMe + 1}
            })
        } else {
            this.setState((prevState, props) => {
                console.log(prevState);
                return {disLikeMe: prevState.disLikeMe + 1}
            })
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            likeMe: 0,
            disLikeMe: 0,
        };
    }

    render() {
        return (
            <div className="App-ReactState">
                <h1>This is ReactState Component</h1>
                <h1>Like : {this.state.likeMe}</h1>
                <h1>Dislike: {this.state.disLikeMe}</h1>
                <button onClick={() => this.handleClick(true)}>Click Like</button>
                <hr/>
                <LikeButton onClikeLike={this.handleClick} like={true}/>
                <LikeButton onClikeLike={this.handleClick}/>
            </div>
        );
    }
}

export default ReactState;
