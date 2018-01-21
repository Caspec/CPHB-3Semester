import React, { Component } from 'react'
import houseData from "../facades/houseFacade";

class House extends Component {

  constructor(props) {
    super(props);
    console.log("house found" + id);
    this.state = { house: {id:"", name:"", address:"", longtitude:"", latitude:"", description:"", place:""}}
    this.houseid = this.props.match.params.houseid;
  }

  componentWillMount() {
    alert("houseid fra constructor: " + this.houseid);
  // Getting data in a variable place
  houseData.getHouseById(this.houseid, data =>{
    console.log(data);
    alert("data inde i getHouseById " +   data.id);
    //Setting state place equals to data, so when we need the data we can get it from state,
    //we do not need Map(), we only get one place and not an array.
    this.setState({ house: {id: data.id, name: data.name, address: data.address, longtitude: data.longtitude, latitude: data.latitude, description: data.description, place: data.place}
  });
})};

  render() {
    return (
       
        <div id="houseId">
          <h2>House</h2>
          <h4>{this.state.house.name}</h4>
          <p>{this.state.house.address}</p>
          <p>{this.state.house.description}</p>    
    
       <p>husk os på longitude og latitude på googlemap</p>


        { this.state.err && ( 
          <div className="alert alert-danger errmsg-left" role="alert"> 
            {this.state.err}
          </div>
        )}

        </div>
    )
  }
}

export default House;