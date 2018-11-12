import React, {Component} from 'react';
import Header from './components/layouts/Header';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Album from "./pages/Album";
import Photo from "./pages/Photo";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <Switch>
                        <PrivateRoute exact path={"/"} component={Home}/>
                        <PrivateRoute exact path={"/user"} component={User}/>
                        <PrivateRoute path={"/user/:id/album"} component={Album}/>
                        <PrivateRoute path={"/album/:id/photo"} component={Photo}/>
                        <Route exact path={"/sign-in"} component={SignIn}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
