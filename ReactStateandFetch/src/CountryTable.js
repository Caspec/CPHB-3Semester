import React, { Component } from "react";

class CountryTable extends Component {
  constructor(){
    super();
    this.state = {label:[], countries:[] }
  }

  componentWillMount(){
    this.getHeadlines();
    this.getData();
  }

  getHeadlines = () => {
    const url = `http://localhost:3333/labels`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({ label: data });
          console.log(data);
        })
        .catch((res) => {
          alert('error');
        })
  }

  getData = () =>{
    const url = `http://localhost:3333/countries`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({ countries: data });
          console.log(data);
        })
        .catch((res) => {
          alert('error');
        })
  }

  render() {

    return (
      <table className="table">
        <thead>
          <tr>
            {
              this.state.label.map(function (labels, i) {
                return (
                  <th key={i}>{labels}</th>
                );
              })
            }
          </tr>
        </thead>
        
        <tbody>
          {
            this.state.countries.map(function (names, i) {
              var timezone = '';
              if(names.timezones.length > 1){
                timezone = ' - (' + names.timezones.length + ' total)';
              }else{
                timezone = '';
              }
              var borders = '';
              if(names.borders.length > 1){
                borders = ' - (' + names.borders.length + ' total)';
              }else{
                borders = '';
              }

              return (
                <tr key={i}>
                  <td>{names.name}</td>
                  <td>{names.capital}</td>
                  <td>{names.region}</td>
                  <td>{names.population}</td>
                  <td>{names.area}</td>
                  <td>{names.timezones[0] + " " + timezone}</td>
                  <td>{names.borders[0] + " " + borders}</td>
                  <td>{names.topLevelDomain}</td>
                  <td>{names.currencies}</td>
                  <td>{names.languages[0]}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}
export default CountryTable;