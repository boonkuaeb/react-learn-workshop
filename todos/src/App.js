import React, {Component} from 'react';
import Header from './components/layouts/Header';
import {Route, Switch} from 'react-router-dom';
import Todo from './pages/Todo';
import Callbacks from './pages/Callbacks';
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
                        <PrivateRoute exact path={"/"} component={Todo}/>
                        <Route exact path={"/sign-in"} component={SignIn}/>
                        <Route exact path={"/callback"} component={Callbacks}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
