import React from 'react';
import PropTypes from 'prop-types';

// class Button extends Component {
//
//     // static contextTypes = {
//     //     color:PropTypes.string
//     // };
//
//
//     render() {
//         return (
//             <button style={{ backgroundColor : this.context.color }}>
//                 {this.props.children}
//             </button>
//         );
//     }
// }


// StateLess Style
const Button = (props, context) => {
    return (
        <button style={{backgroundColor: context.color}}>
            {props.children}
        </button>
    );
};


Button.contextTypes = {
    color: PropTypes.string
};

export default Button;
