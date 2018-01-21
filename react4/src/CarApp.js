import React, {Component} from 'react';
import DataStore from './DataStore';
const dataStore = new DataStore();

class CarApp extends Component{
    constructor(){
        super();
        this.store = dataStore;
        this.state = {_data: []};
        this.store.loadData(function(data){
        //const _data = data;
        this.setState({_data:data});
        }.bind(this));
        this.createCarHardcoded = this.createCarHardcoded.bind(this);
        this.createCar = this.createCar.bind(this);
        this.getOneCar = this.getOneCar.bind(this);
        this.editCar = this.editCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    createCarHardcoded(){
        const car = {
            "make": "Deloran",
            "model": "BTF",
            "year": 1984
         };
         this.store.createCarHardcoded(car, (data)=>{this.setState({_data: data})});
    }

    createCar(){
        const car = {
            make: document.getElementById("carMake").value,
            model: document.getElementById("carModel").value,
            year: document.getElementById("carYear").value
         };
         this.store.createCar(car, (data)=>{this.setState({_data: data})});
    }

    editCar(){
        const car = {
            id: document.getElementById("carIdEdit").value,
            make: document.getElementById("carMakeEdit").value,
            model: document.getElementById("carModelEdit").value,
            year: document.getElementById("carYearEdit").value
        }
        this.store.editCar(car);
    }

    deleteCar(){
        const car = {
            id: document.getElementById("carIdDelete").value
        }
        this.store.deleteCar(car);
    }

    getOneCar(event){
        this.setState({value: event.target.value});
        let id = event.target.value;
        this.store.getOneCar(function(data){
            this.setState({_data: data});
        }.bind(this),id);
    }

    render(){
        let currentData = this.state._data;
        let cars = '';
        if(Object.prototype.toString.call(currentData) === '[object Array]'){
            cars = currentData.map(function(car, index){
                return <h4 key={index}>id: {car.id} model:{car.model}</h4>
            });
        }
        else if (currentData.id == null)
        {
           cars = <h4>ID NOT FOUND! --- Type an ID that is correct --- </h4>
        }
        else
        {
            cars = <h4>Found: id: {currentData.id} model: {currentData.model}</h4>
        }

        //const cars = this.state._data.map(function(car, index){return <h4 key={index}>id:{car.id} model:{car.model}</h4>});

        return(
    
            <div>
            <br /><br />
            <label>
            Type in input for search for the ID using onChange: &nbsp;
            <input type="text" value={this.state.value} onChange={this.getOneCar} id="findCar" />
            </label>
            <br /><br />
            <label>
            Add a new Car
            </label>
            <table>
            <tr><td>make:</td><td><input type="text" id="carMake"  /></td>
            </tr>
            <tr>
            <td>model:</td><td><input type="text" id="carModel"  /></td>
            </tr>
            <tr>
            <td>year:</td><td><input type="text" id="carYear"  /></td>
            </tr>
            <tr>
            <td></td><td><button onClick={this.createCar}>Add a Car from the formular</button></td>
            </tr>
            </table>
            <br /><br />
            <label>
            Edit a Car
            </label>
            <table>
            <tr>
            <td>id:</td><td><input type="text" id="carIdEdit"  /></td>
            </tr>
            <tr>
            <td>make:</td><td><input type="text" id="carMakeEdit"  />
            </td>
            </tr>
            <tr>
            <td>model:</td><td><input type="text" id="carModelEdit"  /></td>
            </tr>
            <tr>
            <td>year:</td><td><input type="text" id="carYearEdit"  /></td>
            </tr>
            <tr>
            <td></td><td><button onClick={this.editCar}>Edit a Car from the formular</button></td>
            </tr>
            </table>
            <br /><br />
            <label>
            Delete a Car by ID
            </label>
            <table>
            <tr>
            <td>id:</td><td><input type="text" id="carIdDelete" /></td>
            </tr>
            <tr>
            <td></td><td><button onClick={this.deleteCar}>Delete Car by ID</button></td>
            </tr>
            </table>
            <br /><br />
            <button onClick={this.createCarHardcoded}>Add a Car to the list HARDCODED!</button>{cars}
    
            </div>
        )
    }
}
export default CarApp;