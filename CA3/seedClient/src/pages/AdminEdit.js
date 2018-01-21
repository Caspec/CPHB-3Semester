import React, { Component } from 'react'
import adminData from "../facades/adminFacade";

class AdminEdit extends Component {

  constructor() {
    super();
    this.state = { data: "", err: "" }
  }

  componentWillMount() {
    /*
    This will fetch data each time you navigate to this route
    If only required once, add "logic" to determine when data should be "refetched"
    */
    adminData.getUserData((e, data) => {
      if (e) {
        return this.setState({ err: e.err })
      }
      this.setState({ err: "", data });
      console.log(data);
    });
    
  }

  render() {
    return (
      <div>
        <h2>Edit User</h2>
        <p>This message is fetched from the server if you were properly logged in</p>
        <div className="msgFromServer">
          test edit {this.state.data}
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

export default AdminEdit;