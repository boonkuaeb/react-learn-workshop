import React, {Component} from 'react';

class FormInput extends Component {

    componentDidMount = ()=>{
        console.log("ComponentDidMount");
        this.txtInput2.focus();
    };
    handleButton= () => {
        this.txtInput1.focus();
    };


    render() {
        return (
            <div className="App-FormInput">
                <p><input type="text" placeholder="text1" ref={(input) => {this.txtInput1 = input}} /></p>
                <p><input type="text" placeholder="text1" ref={(input) => {this.txtInput2 = input}} /></p>
                <button onClick={this.handleButton}>Click Me</button>
            </div>
        );
    }
}

export default FormInput;
