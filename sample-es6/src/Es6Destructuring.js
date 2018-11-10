import React, {Component} from 'react';

class Es6Destructuring extends Component {
    render() {

        let order = {
            userid:'1',
            productCode: '9991',
            product: {
                name: "Mac Pro",
                price: "25,000"
            }
        };

        console.log(order.productCode, order.userid);

        const {productCode, userid ,product:{name, price}} = order;

        console.log(productCode, userid, name, price);

        return (
            <div className="App-Es6Destructuring">
                <h1>This is Es6Destructuring Component</h1>
            </div>
        );
    }
}

export default Es6Destructuring;
