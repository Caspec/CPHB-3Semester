import React from 'react';

class MyClass extends React.Component{

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: 0 };
    }

    handleClick() {
        var arr = ['img/lion.jpg', 'img/zebra.jpg', 'img/monkey.jpg'];
        var rand = arr[Math.floor(Math.random()*arr.length)];
        this.setState({ random: this.state.random + rand });
      }
    

    render(){

       var arr = ['img/lion.jpg', 'img/zebra.jpg', 'img/monkey.jpg'];
       var rand = arr[Math.floor(Math.random()*arr.length)];
       
       
       var divStyle = {
        border: "5px solid green",
        padding: 2,
        margin: 2 
      }; 

        /* var result = arr.map(function(item) { 
            return "<img src='" +item + "' /> ";
          });  */

          var result = arr.map(function(item, index) { 
            return <img style={divStyle} src={item} key={index} alt={index} />;
          }); 
          

        return(
            
            <div>
          
            {result}

            <img src={rand} style={divStyle} alt="randompic" />

            <button onClick={this.handleClick.bind(this)}>Click</button>

            </div>
        );
    }
}


export default MyClass;