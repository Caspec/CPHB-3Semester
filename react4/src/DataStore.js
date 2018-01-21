/* import React from 'react';

//const URL = "http://localhost:3456/api";

class DataStore extends React.Component{

    constructor(){
        super();
       var _books = [];
    }

    loadBooks(){
        fetch('https://davidwalsh.name/some/url', {
            method: 'get'
        }).then(function(response) {
            
        }).catch(function(err) {
            // Error :(
        });
    }

}


export default DataStore; */

const URL = 'http://localhost:4000/cars';

class DataStore{
    constructor(){
        this.cars = [];
        this.createCarHardcoded = this.createCarHardcoded.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    loadData(callback){
        fetch(URL, {method: 'GET'}).then(function(data){
            return data.json();
        }).then(function(data){
            console.log(data);
            callback(data);
        });
    }

    getOneCar(callback, id){
        fetch(URL + "/" + id, 
        {method: 'GET'}).then(function(data){
            return data.json();
        }).then(function(data){
            console.log(data);
            callback(data);
        })
    }
    
    createCarHardcoded(car, callback){
        fetch(URL,
            {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(car)
            }
        ).then(function(data){
            return data.json();
        }).then(()=>this.loadData(callback));
    }

    createCar(car, callback){
        fetch(URL,
            {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(car)
            }
        ).then(function(data){
            return data.json();
        }).then(()=>this.loadData(callback));
    }

    editCar(car){
        fetch(URL+"/" + car.id,
            {
            method: 'PUT',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(car)
            }
        ).then(function(data){
            return data.json();
        }).then(function(data){
            alert("Car updated!");
        }).catch(function (error) {
            alert("Car not updated!");
        });
    }

    deleteCar(car){
        fetch(URL + "/" + car.id,
        {
        method: 'DELETE'
        }
        ).then(function (response) {
            return response.json();
        })
        .then(function (json) {
            alert("Car deleted!");
        })
        .catch(function (error) {
            alert("Unable to delete the Car!");
        });
    }
}
export default DataStore;