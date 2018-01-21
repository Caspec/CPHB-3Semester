import {
  REGISTER_SUCCESS,
  REGISTERH_FAIL,
  GET_PLACES_LIST,
  GET_PLACES_LIST_FAILED
} from './types.js';
import request from '../services/getData';

export const requestRegister = (data) => {
  console.log(data);
  let Name = data.Name;
  let Description = data.Description;
  let GPSLocation = data.GPSLocation;
  let Address = data.Address;
  let photo = data.photo;
  let formData = new FormData();
  formData.append('Name', Name);
  formData.append('Description', Description);
  formData.append('GPSLocation', GPSLocation);
  formData.append('Address', Address);
  if(photo){
    let filename = photo.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? match[1] : '';
    formData.append('Photo', { uri: photo, name: `photo.${type}`, type: `image/${type}`});
  }
  let option = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  return dispatch => {
    const url = `followcasper.dk/seed/api/place/create`;
    request(url, option)
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: REGISTER_SUCCESS, msg: res.msg });
      }
      else dispatch({ type: REGISTER_FAIL, msg: res.msg });
    })
    .catch(err => {
      console.log("ERROR=>", err);
      dispatch({ type: REGISTER_FAIL, msg: 'error' });
    })
  }
}

export const getAllLocations = () => {
  let option = { 
    method: 'GET',
  };
  return dispatch => {
    const url = `https://followcasper.dk/seed/api/place/all`;
    request(url, option)
    .then(res => {   
      console.log("getAllLocations res=>", res);
      // if (res.status === 200) {
        dispatch({ type: GET_PLACES_LIST, list: res.places });   
      // }
      // else dispatch({ type: GET_PLACES_LIST_FAILED, error: "error" });
    })
    .catch(err => {
      console.log("ERROR=>", err);
      dispatch({ type: GET_PLACES_LIST_FAILED, error: err });  
    })  
  }
}