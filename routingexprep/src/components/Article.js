import React from 'react';
import { Route, Link, NavLink } from "react-router-dom";
import { Table } from 'reactstrap';
import ArticleDetails from './ArticleDetails';
import AddData from './AddData';

class Article extends React.Component{
    constructor(props) {
        super(props);
        console.log("props",props);
        this.state = { dataStore: props.dataStore }
      }

      onData = ()=> {
        //Nice and easy way to force a rerender
        this.forceUpdate();
      }

render() {

    const data = this.state.dataStore._data;
    let dataStore = this.state.dataStore;
    const match = this.props.match;

    return (
    <div>
    <h1>Article</h1>
    <Link to={`${match.url}/add`}>Add data / Edit data / Delete data</Link>
    <div style={{ backgroundColor: "lightGray", padding: 5, marginTop: 10, minHeight: 120 }}>
    <Route path={`${match.url}/article/:id`} render={(props) => { return (<ArticleDetails {...props} dataStore={dataStore} />)}} />
    <Route path={`${match.url}/add`} render={(props) => <AddData dataStore={dataStore} onAddData={this.onData} />} />
    </div>

    <Table className="striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Author</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
    {data.map((data) => <tr key={data.id}><th scope="row" key={data.id}>{data.id}</th>
    <td>{data.author}</td><td><NavLink activeClassName="activeV2" to={`${match.url}/article/${data.id}`}>{data.title}</NavLink></td></tr>)}
    </tbody>
  </Table>

  


    </div>
)}


}
  
export default Article;