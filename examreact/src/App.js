import React, { Component } from 'react';
import './App.css';

const URLLocal = "http://localhost:4456/orderlines";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: this.props.msg, data: [], showPriceInEuro: false }
  }


  componentWillMount() {
    fetch(URLLocal, {method: 'GET'})
      .then((data) => {
        return data.json();
  }).then((data)=>{
    this.setState({ data: data})
    console.log(this.state.data);
  });
}

  onChange = (event) =>{
      this.setState({msg: event.target.value});
  }

  onChangeEuro = (event) => {

    this.setState({showPriceInEuro: event.target.checked})
    console.log(this.state.showPriceInEuro);

    /* if(event.target.checked === true){
      this.setState({showPriceInEuro: true})
      console.log("True: " + this.state.showPriceInEuro);
    }
    else {
      console.log("False: " + this.state.showPriceInEuro);
    } */

    
  }

  render() {

   
  
    const orderlines = this.state.data.map((el) => <tr> <td>{el.product}</td> <td>{el.quantity}</td> <td>{el.costPrUnit}</td> <td>{el.quantity * el.costPrUnit}</td> </tr>);

    
    return (
      
      <div>

      <div id="firstPart">
      <h1> h1: Hardcoded</h1>
      <h2>h2: {this.props.msg}</h2>
      <h3>h3: {this.state.msg}</h3>
      <input type="text" onChange={this.onChange} value={this.state.msg}  />
      </div>

      <br /><br />

      <div id="secondPart">
      Show price in Euro: <input type="checkbox" onChange={this.onChangeEuro} />
      <table border="1px solid black">
      <thead><tr><td>Product</td><td>Quantity</td><td>Unit Cost</td><td>Total (kr)</td></tr></thead>
      {orderlines}
      </table>
      
      </div>

      </div>
    );
  }
}

export default App;
