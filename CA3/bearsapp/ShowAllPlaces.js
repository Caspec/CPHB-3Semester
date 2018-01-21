import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const URL = "https://followcasper.dk/seed/";
class PlaceStore {
  constructor() {
    this._data = "";
    this._errorMessage = "";
  }

  getAllPlaces = (cb) => {
    this._errorMessage = "";
    this._messageFromServer = "";
    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
    const options = fetchHelper.makeOptions("GET", true);
    fetch(URL + "api/place/all", options)
      .then((res) => {
        resFromFirstPromise = res;
        return res.json();
      }).then((data) => {
        
              
        errorChecker(resFromFirstPromise,data);
        if (cb) {
         // console.log(data);
          cb(null, data)
            
        }
      }).catch(err => {
        console.log(JSON.stringify(err))
        if (cb) {
          cb({ err: fetchHelper.addJustErrorMessage(err) })
        }
      })
  }

  render() {
    //Lav textboxes til Address, Description og Rating og en get knap der kører getallplaces igen.
  return (
    <div class="row">
      <h2>Places</h2>
      <input type="text" name="searchPlaceName" placeholder="Search place name" onChange={this.getAllPlaces}/>&nbsp;&nbsp;
      <input type="text" name="searchPlaceAddress" placeholder="Search place address"/>&nbsp;&nbsp;
      <div>
        <label>Search rating &nbsp; | </label>&nbsp;&nbsp;
        <label htmlFor="oneStar">1</label>&nbsp;
        <input type="radio" name="oneStar"/>&nbsp;&nbsp;
        <label htmlFor="twoStar">| 2 </label>&nbsp;
        <input type="radio" name="twoStar"/>&nbsp;&nbsp;
        <label htmlFor="threeStar">| 3 </label>&nbsp;
        <input type="radio" name="threeStar"/>&nbsp;&nbsp;
        <label htmlFor="fourStar">| 4 </label>&nbsp;
        <input type="radio" name="fourStar"/>&nbsp;&nbsp;
        <label htmlFor="fiveStar">| 5 </label>&nbsp;
        <input type="radio" name="fiveStar"/>&nbsp;&nbsp;
      </div>
      
      <div>
          {this.state.allPlacesMap}
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

export default PlaceStore;