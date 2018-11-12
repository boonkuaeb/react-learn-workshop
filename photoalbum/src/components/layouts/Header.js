import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {

    handleSignOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('access-token');
        this.props.history.push('/sign-in');
    };

    renderLink = () => {
        if (localStorage.getItem('access-token')) {
            return (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user">Photo</Link></li>
                    <li>
                        <a href="/sign-out" onClick={this.handleSignOut}>Sign Out</a>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <div className="App-Header">
                <h1>Header</h1>
                {this.renderLink()}

            </div>
        );
    }
}

export default withRouter(Header);
