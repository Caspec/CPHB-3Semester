import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const orderlines = [
    {product: "beer", quantity: 24, costPrUnit: 8},
    {product: "milk", quantity: 2, costPrUnit: 5}
]

ReactDOM.render(<App msg="Msg from props" orderlines={orderlines} />, document.getElementById('root'));

