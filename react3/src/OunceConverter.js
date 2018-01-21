import React, { Component } from 'react';
import MyConverter from './MyConverter.js';

class OunceConverter extends Component{
    constructor(){
        super();
        this.state = {value1: 0, value2: 0};
        this.convert = this.convert.bind(this); 
		this.historyKilo = [];
        this.historyPound = []; 
    };
   convert(event){
        console.log(event.target.id);
        const who = event.target.id;
        const value = event.target.value;

        if(who === 'value1'){
            const ounce = value * 0.0283495231;
            this.setState({value1: value, value2: ounce});

            if(this.historyKilo.length >= 10){
                this.historyKilo = this.historyKilo.slice(1,10);
            }
            if(this.historyOunce.length >= 10){
                this.historyOunce = this.historyOunce.slice(1,10);
            }
            this.historyKilo.push(value);
            this.historyOunce.push(ounce);
            console.log("Kilo history:");
            for(let i = 0; this.historyKilo.length > i; i++){
                this.historyKilo[i]
                console.log(this.historyKilo[i]);
            }
            console.log("Ounce history:");
            for(let i = 0; this.historyOunce.length > i; i++){
                this.historyOunce[i]
                console.log(this.historyOunce[i]);
            }
        }else if(who === 'value2'){
            const kilograms = value / 0.0283495231;
            this.setState({value1: kilograms, value2: value})

            if(this.historyOunce.length >= 10){
                this.historyOunce = this.historyOunce.slice(1,10);
            }
            if(this.historyKilo.length >= 10){
                this.historyKilo = this.historyKilo.slice(1,10);
            }
            this.historyKilo.push(kilograms);
            this.historyOunce.push(value);
}}}
    render(){
        return <MyConverter name="Ounce to kilo converter (Value1 = ounce, value2 = kilo)" 
                          convert={this.convert}
                          state_value1={this.state.value1}
                          state_value2={this.state.value2} />
    }
}
export default OunceConverter;