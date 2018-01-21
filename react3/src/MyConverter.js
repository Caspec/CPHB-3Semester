import React from 'react';

class MyConverter extends React.Component {
    
    constructor(){
        super();
/*         this.state = {
            kilo: '', pounds: ''
        };

        this.convert = this.convert.bind(this);
 */
    }

/*     convert(e){
        this.setState({kilo: e.target.value * 0.5});
        this.setState({pounds: e.target.value * 1});

        
    } */

  /*   render(){

        return(

        <div>
          
        <form>
        <label>
          Kilo: &nbsp;
          <input type="text" onChange={this.convert} value={this.state.kilo} />
        </label> &nbsp;
        <label>
          Pounds: &nbsp;
          <input type="text" onChange={this.convert} value={this.state.pounds} />
        </label>
        </form>
            
       

        </div>

        )

    } */

    
    render(){
        return (<div>
            <h1>{this.props.name}</h1>

            <span>value1:</span><Input id="value1" onChange={this.props.convert} 
            value={this.props.state_value1}/><br/>

            <span>value2:</span><Input id="value2" onChange={this.props.convert} 
            value={this.props.state_value2}/>

            </div>);
    }

}

const Input = (props)=>{return <input type="number" id={props.id} 
onChange={props.onChange} value={props.value}/>};

export default MyConverter;

