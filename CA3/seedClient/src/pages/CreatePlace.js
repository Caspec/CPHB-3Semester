import React, { Component } from 'react'
//import userData from "../facades/userFacade";
import PlaceStore from "../facades/placeFacade";

class CreatePlace extends Component{

    constructor() {
        super();
        this.state = { err: "", place: {name:"", address:"", longtitude:"", latitude:"", description:"", rating:"", imageurl:""} }
    }

           
       handleSubmit = (event) => {
        event.preventDefault()
        const placeName = this.state.place.name;
        const placeAddress = this.state.place.address;
        const placeLongtitude = this.state.place.longtitude;
        const placeLatitude = this.state.place.latitude;
        const placeDescription = this.state.place.description;
        const placeRating = this.state.place.rating;
        const placeImageUrl = this.state.place.imageurl;
        PlaceStore.createPlace(placeName, placeAddress, placeLongtitude, placeLatitude, placeDescription, placeRating, placeImageUrl, (err) => {
            this.setState({ err: "Success" });
        });
      }
    
      onChange = (e) => {
        const propertyName = e.target.id;
        const value = e.target.value;
        let place = this.state.place;
        place[propertyName] = value;
        this.setState({place});
      }

        save = (e) => {
        var input = document.querySelector('input[type="file"]');
        var data = new FormData();
        data.append('file', input.files[0]);
        data.append("user", 'WEB User');
        fetch('api/upload/file', {
          method: 'POST',
          body: data
        });
        e.preventDefault();
      }



 
      
/* 
      render(){
          return(
        <div>
           <h1>Register user</h1>
          Username: <input type="text" id="username" name="username" ref="username" /> &nbsp; 
          Password: <input type="text" id="password" name="password" ref="password" /> <br />
          <button onClick={this.onRegister}>Register new user</button> 
        </div>
          )} */

          //selve upload billede virker ikke....
          render() {
            return (
              <div className="container">
              <h2>Create place</h2>
                <form id="placeform" onSubmit={this.handleSubmit} encType="multipart/form-data" method="POST">
                  <input type="text" value={this.state.place.name} onChange={this.onChange} className="form-control" id="name" placeholder="Name" required autoFocus />
                  <input type="text" value={this.state.place.address} onChange={this.onChange} className="form-control" id="address" placeholder="Address" required />
                  <input type="text" value={this.state.place.longtitude} onChange={this.onChange} className="form-control" id="longtitude" placeholder="Longtitude" required />
                  <input type="text" value={this.state.place.latitude} onChange={this.onChange} className="form-control" id="latitude" placeholder="Latitude" required />
                  <input type="text" value={this.state.place.description} onChange={this.onChange} className="form-control" id="description" placeholder="Description" required />
                  <input type="text" value={this.state.place.rating} onChange={this.onChange} className="form-control" id="rating" placeholder="Rating (1-5)" required />
                  <label>Select File</label><input type="file" name="imageurl" id="imageurl" /><br/><br/>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Create</button>
                  <br />
                </form>
                { this.state.err && ( 
                  <div className="alert alert-info"  role="alert"> 
                    {this.state.err}
                  </div>
                )}
              </div>
            )
          }
        }

export default CreatePlace;