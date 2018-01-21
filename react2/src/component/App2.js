//Create a new file App2.js, and copy all from this file into is

import React from "react";
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Prompt } from "react-router-dom";
import BookStore from './BookStore';
import Header from './Header';
import Details from './Details';
import Product from './Product';

// <Route path="/company" component={Company} /> tager en component
// <Route path="/products" render={(props) => (<Product {...props} bookStore={BookStore} />)} /> tager en metode


const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Info about this site</p>
  </div>
)

const Company = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Our about page</p>
    </div>
  )
}

export default class App2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HashRouter >
        <div>
          <Header />
          <Switch>
            <Route path="/products" render={(props) => (<Product {...props} bookStore={BookStore} />)} />
            <Route path="/company" component={Company} /> 
            <Route component={Home}></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}