import React, { Component } from 'react'
import adminData from "../facades/adminFacade";
import { Link, Switch, Route } from "react-router-dom";
import AdminEdit from './AdminEdit';

class AllUsersPage extends Component {

  constructor() {
    super();
    this.state = { data: "", err: "" }
  }

  componentWillMount() {
    /*
    This will fetch data each time you navigate to this route
    If only required once, add "logic" to determine when data should be "refetched"
    */
    adminData.getAllUsers((e, data) => {
      if (e) {
        return this.setState({ err: e.err })
      }
      //var message ="";
      /* for (let i=0; i< data.length;i++) {
        if(i==data.length-1){
          message+=data[i];
        }else {
        message+=data[i] + " , ";   
      }} */
     
        let message = data.map(function(data, index){
        return <li key={index}>{data} <Link to={`/edit/${data}`}><button className="btn .btn-warning .btn-xs">Edit</button></Link> <button className="btn .btn-danger .btn-xs">Delete</button></li> 
      })
       
      this.setState({ err: "", data: data, message:message });
      console.log(message);
    });
  }

  render() {
    
    return (
      
      <div>
        <h2>All users in a list</h2>
        <p>This message is fetched from the server if you were properly logged in</p>
        <div className="msgFromServer">
        <ul>
          {this.state.message}
        </ul>
        </div>
        {this.state.err && (
          <div className="alert alert-danger errmsg-left" role="alert">
            {this.state.err}
          </div>
        )}
      </div>
      
    )
    
  }
}

export default AllUsersPage;