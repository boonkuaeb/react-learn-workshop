import React, {Component} from 'react';

class Home extends Component {

    state = {age: 0};

    upAge = () => {
        this.setState((prevState) => {
            return {
                age: prevState.age + 1
            }
        })
    };

    downAge = () => {
        this.setState((prevState) => {
            return {
                age: prevState.age - 1
            }
        })
    };


    render() {
        return (
            <div className="App-Home">
                <h1>Your age is  {this.state.age} years</h1>
                <button onClick={this.upAge}>+ Age</button>
                <button onClick={this.downAge}>- Age</button>
            </div>
        );
    }
}

export default Home;
