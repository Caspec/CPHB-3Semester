/* import React from 'react';
import PropTypes from 'prop-types';

class ImageHolder extends React.Component{
    render(){
        let img = this.props.img
        return <img src={img} />
    }
}

ImageHolder.propTypes = {
    img: React.PropTypes.string.isRequired,
    txt: React.PropTypes.string.isRequired
};

  export default ImageHolder; */
  
import React, { Component } from 'react';

class ImageHolder extends Component{
    constructor(){
        super();
    }
    //Component kan benyttes som et costum html tag (i dette tilfælde <ImageHolder>)
    //Denne kalder componentens render metode, for at vide hvad <ImageHolder> betyder.
    //I dette tilfælde er det altså en div, der indeholder en <img> og <p>.
    //Man kalder så this.props.navn_på_property som henviser til parents property,
    //som i dette tilfælde er image, description og styling.
    render(){
        return <div><img src={this.props.image} style={this.props.styling}/><p>{this.props.description}</p></div>;
    }

}
export default ImageHolder;  