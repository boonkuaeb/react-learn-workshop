import React, {Component} from 'react';

class SignIn extends Component {

    state = {
        username: '',
        password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('access-token', true);
        this.props.history.push('/');
    };

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })

    };

    render() {
        return (
            <div className="App-SignIn">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">User Name: </label>
                        <input
                            id="username"
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
