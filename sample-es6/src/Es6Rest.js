import React, {Component} from 'react';

class Es6Rest extends Component {
    render() {
        return (
            <div className="App-EscRest">
                <h1>This is Es6Rest Component</h1>

                <button onClick={()=>this.handleClick("BK","Apple", "Bob", "Jo")}>Click Rest</button>
            </div>
        );
    }

    handleClick(name, ...other)
    {
        console.log(name, "other", other);
    }
}

export default Es6Rest;
