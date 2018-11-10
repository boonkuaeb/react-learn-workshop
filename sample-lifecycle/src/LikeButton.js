import React from 'react';


const LikeButton = (props) => {

    return (
        <button onClick={ handleClickLike}>Like</button>
    );

    function handleClickLike() {
        props.handleClickLike();
    }

};


// import React, {Component} from 'react';
//
// class LikeButton extends Component {
//
//     componentWillUnmount=()=>{
//       console.log("Link Button componentWillUnmount")
//     };
//
//     handleClickLike=()=>{
//         this.props.handleClickLike();
//     };
//
//     render() {
//         return (
//             <button onClick={this.handleClickLike}>Like</button>
//         );
//     }
// }
//
export default LikeButton;
