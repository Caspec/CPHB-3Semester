import React, { Component } from 'react';
import MyConverter from './MyConverter.js';

class KiloConverter extends Component{
    constructor(){
        super();
        this.state = {value1: 0, value2: 0};
        this.convert = this.convert.bind(this); 
		this.historyKilo = [];
        this.historyPound = []; 
    };
    if(this.historyKilo.length >= 10){
                this.historyKilo = this.historyKilo.slice(1,10);
            }
            if(this.historyPound.length >= 10){
                this.historyPound = this.historyPound.slice(1,10);
            }
            this.historyKilo.push(value);
            this.historyPound.push(pound);
            console.log("Kilo history:");
            for(let i = 0; this.historyKilo.length > i; i++){
                this.historyKilo[i]
                console.log(this.historyKilo[i]);
            }
            console.log("Pound history:");
            for(let i = 0; this.historyPound.length > i; i++){
                this.historyPound[i]
                console.log(this.historyPound[i]);
            }

        }else if(who === 'value2'){
            const kilo = value / 2.20462;
            this.setState({value1: kilo, value2: value})

            if(this.historyPound.length >= 10){
                this.historyPound = this.historyPound.slice(1,10);
            }
            if(this.historyKilo.length >= 10){
                this.historyKilo = this.historyKilo.slice(1,10);
            }
            this.historyPound.push(value);
            this.historyKilo.push(kilo);
            console.log("Kilo history:");
            for(let i = 0; this.historyKilo.length > i; i++){
                this.historyKilo[i]
                console.log(this.historyKilo[i]);
            }
            console.log("Pound history:");
            for(let i = 0; this.historyPound.length > i; i++){
                this.historyPound[i]
                console.log(this.historyPound[i]);
            }
    render(){
        return <MyConverter name="Kilo to pounds converter (Value1 = kilo, value2 = pounds)" 
                          convert={this.convert}
                          state_value1={this.state.value1}
                          state_value2={this.state.value2} />
    }
}
export default KiloConverter;