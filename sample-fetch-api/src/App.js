import React, {Component} from 'react';

class App extends Component {

    state = {data: null, error: null};

    componentDidMount = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userid=1`)
            .then(response => {
                if (response.ok) {
                    return response
                }

                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => this.setState({data: result}))
            .catch(error => this.setState({error: error.message}))
    };

    render() {

        const {data, error} = this.state;
        let list = <div>Loading...</div>;

        if (data) {
            if (data.length > 0) {
                list = data.map(r => {
                    return (
                        <div key={r.id}>
                            <h3>{r.title}</h3>
                            <p>{r.body}</p>
                            <hr/>
                        </div>
                    )
                })
            } else {
                list = <div>No Data</div>
            }
        }

        if (error) {
            list = <div>Error: {error}</div>
        }

        return (
            <div className="App">
                <h1>Load Data from API</h1>
                {list}
            </div>
        );
    }
}

export default App;
