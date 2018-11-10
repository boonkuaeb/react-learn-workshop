import React, {Component} from 'react';

class FormData extends Component {

    state = {
        code: '',
        name: '',
        category: 'Test2Value',
        status: true
    };

    handleChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        if(event.target.type === "checkbox")
        {
            value=event.target.checked;
        }
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        console.log("handleSubmit", this.state);
        event.preventDefault();
    };

    componentDidMount=()=>{
        console.log("componentDidMount",this.state);

    };

    componentDidUpdate = (prevProps, prevState, snapshot) =>{
        console.log("componentDidUpdate",this.state);
    };


    render() {
        return (
            <div className="App-FormData">
                <h1>FormData</h1>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="cateogry">Category</label>
                        <select name="category"
                                onChange={this.handleChange}
                                value={this.state.category}
                        >
                            <option value="">Select Category</option>
                            <option value="Test1Value">Test1</option>
                            <option value="Test2Value">Test2</option>
                            <option value="Test3Value">Test3</option>
                        </select>
                    </div>

                    <div>
                        <label>ID:</label>
                        <input type="text"
                               value={this.state.code}
                               name="code"
                               onChange={this.handleChange}
                               placeholder="Please input Id"/>
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text"
                               value={this.state.name}
                               name="name"
                               onChange={this.handleChange}
                               placeholder="Please input Name"/>
                    </div>

                    <div>
                        <label>Check Box:</label>
                        <input type="checkbox"
                               name="status"
                               checked={this.state.status}
                               onChange={this.handleChange}
                               placeholder="Please input Name"/>
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormData;
