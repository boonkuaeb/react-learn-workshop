import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="App-Header">
                <h1>This is Header Component {this.props.title}</h1>
                <h1>{this.props.counter}</h1>
            </div>
        );
    }
}

export default Header;
