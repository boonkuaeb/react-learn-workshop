import React, {Component} from 'react';

class Profile extends Component {

    componentDidMount = () => {
        console.log("Profile::componentDidMount");
    };

    // Update component
    componentWillReceiveProps = (nextPros) => {

        console.log("Profile : Update :: componentWillReceiveProps");
        console.log("prevPops.likeMe", nextPros.like);
        console.log("this.props.likeMe", this.props.like);
        if (nextPros.like === 2 && this.props.like < 2) {
            this.props.hideButton();
        }

    };

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("Profile : Update :: shouldCompomentUpdate");
        return true;
    };

    componentWillUpdate = (nextProps, nextState) => {
        console.log("Profile : Update :: componentWillUpdate");
    };

    componentDidUpdate = (prevPops, prevState) => {

    };


    render() {
        console.log("Profile::render");
        return (
            <div className="App-Profile">
                <h2>Like : {this.props.like}</h2>
            </div>
        );
    }
}

export default Profile;
