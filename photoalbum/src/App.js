import React, {Component} from 'react';
import Header from './components/layouts/Header';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Album from "./pages/Album";
import Photo from "./pages/Photo";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/user"} component={User}/>
                    <Route path={"/user/:id/album"} component={Album}/>
                    <Route path={"/album/:id/photo"} component={Photo}/>
                </div>
            </div>
        );
    }
}

export default App;
