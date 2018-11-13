import React, {Component} from 'react';

class SignIn extends Component {


    componentDidMount=()=>{
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 20; i++)
        {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        let url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1619902299&redirect_uri=http://localhost:3000/auth&state=${text}&scope=profile`
        console.log(url);

        window.location = url;
    };

    render() {
        return (
            <div className="App-SignIn">

            </div>
        );
    }
}

export default SignIn;
