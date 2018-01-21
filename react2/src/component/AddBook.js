import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch, Prompt } from "react-router-dom";
import BookStore from './BookStore';

//Todo: This component must be completed
class AddBook extends React.Component {
    constructor(props) {
      super(props);
      this.state = { "book": { title: "", info: "" }, isDirty: false }
    }
    onSave = () => {
        BookStore.addBook(this.state.book);
        this.props.onAddBook();
        if(this.refs.title.value !== '' || this.refs.info.value !== ''){
          this.setState({isDirty: false});
        }
    }
    onDelete = () => {
      BookStore.deleteBook(this.refs.delete.value);
      this.props.onDeleteBook();
      if(this.refs.delete.value !== ''){
        this.setState({isDirty: false});
      }
    }
    
    onEdit = () => {

     const book = {
       title: this.refs.etitle.value,
       info: this.refs.einfo.value
     }

      /* console.log(this.refs.eid.value);
      console.log(this.refs.etitle.value);
      console.log(this.refs.einfo.value); */
      /* console.log(book.title);
      console.log(book.info); */
      BookStore.editBook(this.refs.eid.value, book);
      this.props.onDeleteBook();
      if(this.refs.eid.value !== '' || this.refs.etitle.value !== '' || this.refs.einfo.value !== ''){
        this.setState({isDirty: false});
      }
      //this.props.history.push('/products');
      
    }

    onChange = (e) => {
       const name = e.target.name;
       const val = e.target.value;
       if(name === 'title'){
        this.state.book.title = val;
        this.setState({isDirty: true});
       }
       else if(name === 'info'){
        this.state.book.info = val;
        this.setState({isDirty: true});
       }
       else if(name === 'delete'){
        this.setState({isDirty: true});
       }
       else if(name === 'eid' || name === 'etitle' || name === 'einfo'){
        this.setState({isDirty: true});
       }
    
  }
    
    render() {

      var result;
      if(this.state.isDirty)
      {
        result = "Yes";
      }
      else
      {
        result = "No";
      }
     
      return (
        <div>
          isDirty: {result}<br /><br />
          Title: <input name="title" ref="title" onChange={this.onChange} />&nbsp;
          Info: <input name="info" ref="info" onChange={this.onChange} />&nbsp;
          <button onClick={this.onSave}>Save</button>&nbsp;<br /><br />
          Delete a Book<br /> <input name="delete" ref="delete" onChange={this.onChange} />
          <button onClick={this.onDelete}>Delete!</button><br /><br />
          Edit a Book<br /> Id:<input name="eid" ref="eid" onChange={this.onChange} /> &nbsp; Title: <input name="etitle" ref="etitle" onChange={this.onChange} /> &nbsp; Info:<input name="einfo" ref="einfo" onChange={this.onChange} /> 
          <button onClick={this.onEdit}>Edit me!</button>
          {<Prompt when={this.state.isDirty} message="You have unsaved data that will be lost!" />}
        </div>
      )
    }
  }
  export default AddBook;