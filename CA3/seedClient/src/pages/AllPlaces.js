import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import placeData from "../facades/placeFacade";

class AllPlaces extends Component {

  constructor() {
    super();
    this.state = { data: "", err: "", rate: ""}
  }

// dummy function to rate --> add onclick to the rating images... --> add new function addRate in PlaceStore.js to store new data

printFunct(){
  console.log(this.state.id);
}

 rate(rn){
      placeData.addRate(rn,(cb) => {
      
         this.setState({rate: rn})
        const placeRating = {id : this.state.id, rating : this.state.rate}
        console.log(this.state.id);
        placeData.addRate(placeRating, (err) => {
                  this.setState({ err: "Success" });
                  this.props.history.push('/');
        }); 
    
    })
    }

  componentWillMount() {
    /*
    This will fetch data each time you navigate to this route
    If only required once, add "logic" to determine when data should be "refetched"
    */
    
    
    

    placeData.getAllPlaces((e, data) => {
        //lav 3 if statements, en der tjekker om address boxen er tom, en der tjekker om Description boxen er tom
        //og en der tjekker om rating boxen er tom. Hvis de ikke er tomme, skal indeholdet af boxen sættes ind i body
        //med det rigtige tag (fx hvis address box ikke er tom, skal der tilføjes "address" med værdien af det der står i boxen
        //til body)
        
    let allPlacesMap = data.places.map(function(data){
              return <div class="bg-info text-center">
                        <h3>{data.name}</h3>
                        <p>{data.address}</p>
                        <div>{data.description}</div>
                        <p>{data.rating}</p>
                        <img src={data.imageUrl}/>
              <Link class="clearfix" to={`/place/${data.name}`} placename={{ placename: data.name }} placeid={{ placeid: data.id }}>See More...</Link>

              <button><img src="/rating1.png" alt="rating1" /></button> &nbsp;&nbsp; <img src="/rating2.png" alt="rating" /> &nbsp;&nbsp; <img src="/rating3.png" alt="rating3" /> &nbsp;&nbsp; <img src="/rating4.png" alt="rating4" /> &nbsp;&nbsp; <img src="/rating5.png" alt="rating5" />
              </div>
            })

        this.setState({data:data, allPlacesMap:allPlacesMap});

      if (e) {
        return this.setState({ err: e.err })
      }
      this.setState({ err: "", data });
    });

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

export default AllPlaces;