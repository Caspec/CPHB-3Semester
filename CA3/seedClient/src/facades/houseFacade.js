import fetchHelper, {errorChecker} from "./fetchHelpers"
const URL = require("../../package.json").serverURL;

class HouseStore {
  constructor() {
    this._data = "";
    this._errorMessage = "";
  }

  getAllHouses = () => {     
    const options = fetchHelper.makeOptions("GET", true);
    fetch(URL + "api/house/all", options)
      .then(function(res) {
        return res.json();
      }).catch(err => {
        console.log(err._errorMessage);
      })
  }
 
 getHouseById = (placename, cb) => {
  const options = fetchHelper.makeOptions("GET", true);
  fetch(URL + "api/place/" + placename, options)
        .then(function(data){
          return data.json();
      }).then(function(data){
          if(cb){
            cb(data)
            return data;
          }
      })
       return;
      }




  
}

let houseStore = new HouseStore();

//Only for debugging
//window.userStore = userStore;
export default houseStore;
