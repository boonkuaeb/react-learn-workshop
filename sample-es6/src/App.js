import React, {Component} from 'react';
import Header from './Header';
import Es6Spread from './Es6Spread';
import Es6Rest from './Es6Rest';
import Es6Destructuring from './Es6Destructuring';
import ReactState from './ReactState';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likeMe:1
        }
    }


    render() {
        let sample = "sample 01";

        // Rest Parameter


        // Destructuring

        return (
            <div className="App">
                <Header
                    title={sample}
                    counter="01"
                />

                {/*<button onClick={this.handleClick.bind(this)}>Click Me</button>*/}
                {/*<button onClick={()=>this.handleClick()}>Click Me</button>*/}
                <button onClick={() => this.handleClick("Hi")}>Click Me App</button>

                <Es6Spread/>
                <Es6Rest/>
                <Es6Destructuring/>
                <hr/>
                <ReactState/>
            </div>
        );
    }

    handleClick = (greeting)=> {
        console.log(greeting, this.state.likeMe)
    }
}

export default App;
