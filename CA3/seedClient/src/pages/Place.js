import React, { Component, Link } from 'react'
import placeData from "../facades/placeFacade";
import houseData from "../facades/houseFacade";

class Place extends Component {

  constructor(props) {
    super(props);
    console.log("Oprettet place");
    this.state = { place: {name:"", address:"", longtitude:"", latitude:"", description:"", rating:"", imageurl:""}}
    this.placename = this.props.match.params.placename;
    this.placeid = this.props.match.params.placeid;
  }

  componentWillMount() {
    alert("In ComponentWillMount, this.placename " + this.placename);
  // Getting data in a variable place
  placeData.getPlaceById(this.placename, data =>{
    //Setting state place equals to data, so when we need the data we can get it from state,
    //we do not need Map(), we only get one place and not an array.
    this.setState({ place: {name: data.name, address: data.address, longtitude: data.longtitude, latitude: data.latitude, description: data.description, rating: data.rating, imageurl: data.imageurl}
  });
})

houseData.getAllHouses()
.then(function(jsonData) {
  console.log("THIS IS WHAT getAllHouses Returns : " + jsonData);})


  
  // jsonData.filter(house => house.id == this.placeid)
  
}

  render() {
    return (
       
        <div id="placeId">
          <h2>Place</h2>
          <h3>{this.state.place.name}</h3>
          <h3>{this.state.place.address}</h3>

        { this.state.err && ( 
          <div className="alert alert-danger errmsg-left" role="alert"> 
            {this.state.err}
          </div>
        )}

        </div>
    )
  }
}

export default Place;