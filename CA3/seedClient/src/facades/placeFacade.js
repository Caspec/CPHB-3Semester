import fetchHelper, {errorChecker} from "./fetchHelpers"
const URL = require("../../package.json").serverURL;

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

  createPlace = (name, address, longtitude, latitude, description, rating, image, cb) => {
    this._errorMessage = "";

    var place = { name, address, longtitude, latitude, description, rating, image };
    var formData = new FormData();
    formData.append("name", "lolool");
    formData.append("address", address);
    formData.append("longtitude", longtitude);
    formData.append("latitude", latitude);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("image", image);
    
  
    var options = {
     method: "POST",
     body: formData,
     headers: new Headers({
       'Content-Type': 'application/x-www-form-urlencoded'
     })
    }
   let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
   fetch(URL + "api/place/create", options)
     .then(res => {
       resFromFirstPromise = res;
       return res.json();
     })
    .then(data => {
       errorChecker(resFromFirstPromise, data);
       if (cb) {
        cb(null, data)
      }
     })
     .catch(err => {
      console.log(err);
       if (cb) {
         cb({ errorMessage: fetchHelper.addJustErrorMessage(err) });
       }
    })
   return;
 }

 getPlaceById = (placename, cb) => {
  const options = fetchHelper.makeOptions("GET", true);
  fetch(URL + "api/place/" + placename, options)
        .then(function(data){
          return data.json();
      }).then(function(data){
          console.log(data);
          if(cb){
            cb(data)
            return data;
          }
      })
       return;
      }

  addRate = (rating, cb) =>{
    this._errorMessage = "";

    var rate = {rating}

  var options = {
    method: "PUT",
    body: JSON.stringify(rate),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
 }
 let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
 fetch(URL + "api/place/updateRating", options)
   .then(res => {
     resFromFirstPromise = res;
     return res.json();
   })
  .then(data => {
     errorChecker(resFromFirstPromise, data);
     if (cb) {
      cb(null, data)
    }
   })
   .catch(err => {
    console.log(err);
     if (cb) {
       cb({ errorMessage: fetchHelper.addJustErrorMessage(err) });
     }
  })
 return;
}
}

let placeStore = new PlaceStore();

//Only for debugging
//window.userStore = userStore;
export default placeStore;
