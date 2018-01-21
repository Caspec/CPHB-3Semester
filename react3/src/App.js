import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyConverter from './MyConverter';
import KiloConverter from './KiloConverter';
import OunceConverter from './OunceConverter';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Converter App</h1>
        </header>

        <br/>
        <KiloConverter/>
        <hr/>
        <OunceConverter/>
        
      </div>
    );
  }
}

export default App;
