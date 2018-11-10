import React, {Component} from 'react';
import {connect} from 'react-redux'

class Home extends Component {

    render() {
        return (
            <div className="App-Home">
                <h1>Your age is {this.props.age} years</h1>
                <button onClick={this.props.upAge}>+ Age</button>
                <button onClick={this.props.downAge}>- Age</button>
            </div>
        );
    }
}
//********************************************************************
//    aAll state will reset when refreshing the browser
//********************************************************************

// Mapping Home component stage to Redux store as an props name age.
function mapStateToProps(state) {
    return {age: state}
}

// Define function to call a store command
function mapDispatchToProps(dispatch) {
    return {
        downAge: () => {
            dispatch({type: 'DOWN_AGE'})
        },
        upAge: () => {
            dispatch({type: 'UP_AGE'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
