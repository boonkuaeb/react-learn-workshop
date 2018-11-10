import React, {Component} from 'react';

class Es2Spread extends Component {

    render() {


// ###### Using Spread Operator ########
// 1. Spread with object
        let objA = {a:1, b:2, c:3};
        let objB = {d:4, e:5, f:6};

        let objResultAB = {...objA,...objB};
        console.log(objResultAB);

        let objResultBA = {...objB,...objA};
        console.log(objResultBA);

// 2. Spread with array
        let arrA = [1,2,3];
        let arrB = [4,5,6];
        let arrResult = [...arrA, ...arrB];
        console.log(arrResult);

        return (
            <div className="App-DemoSpread">
                <h1>This is Es2Spread Component</h1>
            </div>
        );
    }
}

export default Es2Spread;
