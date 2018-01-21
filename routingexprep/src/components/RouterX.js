import React from 'react';
import { HashRouter } from "react-router-dom";
import Header from './Header';
import Main from './Main';


  const RouterX = () => (

    <div>
      <App />
    </div>

  )
      
class App extends React.Component {

    render() {
      return (
        <HashRouter>
          <div>
          <Header />
          <Main />
          </div>
        </HashRouter>
      );
    }
  }

export default RouterX;