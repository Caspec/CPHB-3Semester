import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './About';
import Article from './Article';
import Images from './Images';
import DataStore from './DataStore';


export default class Main extends React.Component {
    render() {
        return (
          <div>
          <Switch>
          <Route path="/images" component={Images} /> 
          <Route path="/article" render={(props) => (<Article {...props} dataStore={DataStore} component={Article} />)} />
          <Route path="/about" component={About} /> 
          </Switch>
          </div>
        );
      }  
}
