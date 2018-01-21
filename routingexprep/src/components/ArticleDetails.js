import React from 'react';
//import { Link } from "react-router-dom";

class ArticleDetails extends React.Component {

    componentWillReceiveProps =(nextProps)=>{
        this.setState({article:nextProps.article});
    }
    
    render() {
      let id = this.props.match.params.id;
      let data = this.props.dataStore.data.filter((data) => {
        return data.id === Number(id);
      })[0];
      return (
        <div style={{ padding: 4 }}>
          <h4 style={{ color: "steelblue" }}>Title: {data.title}</h4>
          <p>Author: {data.author}</p>
          <a href="https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html" target="_blank" rel="noopener noreferrer">Click her to go for the article...</a><br /><br />
          <img src={data.img} alt={data.img} />
        </div>
      );
    }
  }
export default ArticleDetails;  