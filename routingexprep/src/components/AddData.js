import React from 'react';
//import { BrowserRouter, Route, Link, NavLink, Switch, Prompt } from "react-router-dom";
import DataStore from './DataStore';

class AddData extends React.Component {
    constructor(props) {
      super(props);
      this.state = { "data": { author: "", title: "", img: "" }}
    }

    onAdd = () => {
        DataStore.addData(this.state.data);
        this.props.onAddData();
    }

    onDelete = () => {
        DataStore.deleteData(this.refs.id.value);
        this.props.onAddData();
      }

    onEdit = () => {
        
             const data = {
               author: this.refs.author.value,
               title: this.refs.title.value
             }
             DataStore.editData(this.refs.id.value, data);
             this.props.onAddData();
             //this.props.history.push('/products');
    }

    onChange = (e) => {
       const name = e.target.name;
       const val = e.target.value;
       this.state.data.img = this.refs.img.value;
       if(name === 'author'){
        this.state.data.author = val;
       }
       else if(name === 'title'){
        this.state.data.title = val;
       }

}
    
    render() {
     
      return (
        <div>
          Author:<input type="text" name="author" ref="author" onChange={this.onChange} />&nbsp;
          Title: <input type="text" name="title" ref="title" onChange={this.onChange} />&nbsp;
          ID for update / delete: <input type="text" name="id" ref="id" />
                 <input type="hidden" name="img" ref="img" disabled="true" value="../img/noimg1.png" />&nbsp;
          <button onClick={this.onAdd}>Add</button>&nbsp; <button onClick={this.onEdit}>Edit</button>&nbsp; <button onClick={this.onDelete}>Delete</button><br /><br />
        </div>
      )
    }
  }
  export default AddData;