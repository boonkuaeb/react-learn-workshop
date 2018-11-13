import React, {Component} from 'react';

class Auth extends Component {

    componentWillMount=()=>{
        const code = new URLSearchParams(this.props.location.search).get("code");
        console.log(code);

        fetch(`https://fde112f2.ngrok.io/api/auth`, {
            method: 'POST',
            body: JSON.stringify({code:code}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => {
                localStorage.setItem('access-token',result.data.access_token );
                this.props.history.push('/');
            })
            .catch(e => {
                this.props.history.push('/error');
            })

    };

    render() {
        return (
            <div className="App-Callbacks">
            </div>
        );
    }
}

export default Auth;
