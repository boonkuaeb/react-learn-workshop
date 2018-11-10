import React, {Component} from 'react';
import LikeButton from './LikeButton';
import Profile from './Profile';

class App extends Component {

    state = {
        likeMe: 0,
        showButton: true
    };

    componentWillMount = () => {
        console.log("App:: componentWillMount");
    };

    componentDidMount = () => {
        console.log("App:: componentDidMount");
    };

    setHideButton = () => {

            this.setState((prevState) => {
                return {
                    showButton: false
                }
            })
    };

    handleClickLike = () => {
        this.setState((prevState) => {
            return {
                likeMe: prevState.likeMe + 1
            }
        })
    };


    render() {
        console.log("App:: render");

        return (
            <div className="App">
                <h1>React life Cycle</h1>
                <Profile like={this.state.likeMe} hideButton={this.setHideButton} />
                {this.state.showButton && <LikeButton like={this.state.likeMe} handleClickLike={this.handleClickLike}/>}
            </div>
        );
    }
}

export default App;
