import React from 'react';

const SideBare =(props)=> {
    return (
        <div style={ {backgroundColor: 'green'}}>
            <h1>
                SideBare {props.children}
            </h1>
        </div>
    )
};

export default SideBare;
