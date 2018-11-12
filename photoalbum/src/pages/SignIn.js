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
                    <div>
                        <p>User Name:</p>
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>Password:</p>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit">Sign In</button>

                </form>
            </div>
        );
    }
}

export default SignIn;
