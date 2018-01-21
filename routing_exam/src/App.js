import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'
import axios from 'axios';

const Home = () => (
  <div>
    <h2>Home</h2>
    <div>Welcome to home</div>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <div>This is the about page</div>
  </div>
)

const URLONE = "https://api.github.com/repos/Cphdat3sem2017f/";

class Repository extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { repo: {} }
    }
  
    componentWillMount() {
      const url = this.props.match.params.name;
      fetch(URLONE + url, {method: 'GET'})
      .then((data) => {
        return data.json();
  }).then((data)=>{
    console.log(data);
  });
    }
    render() {
  
      return (<div>
        <h2>Repository</h2>
        <p>This control should show details for a SINGLE selected repository</p>
      </div>
      )
    }
  }

const URL = "https://gist.githubusercontent.com/Thomas-Hartmann/1bab5f3b3ac8bbb6b4607db725e8ea20/raw/85fd536b2a9e2e25cac9ebcf9d2576686bfc7818/github_repos.json";
const URLLocal = "http://localhost:8084/routing/api/git/all";

class Repositories extends React.Component {

 

  constructor(props) {
    super(props);
    this.state = { data: [] }
    
  }


  componentWillMount() {
    fetch(URLLocal, {method: 'GET'})
      .then((data) => {
        return data.json();
  }).then((data)=>{
  
    console.log("COMPONENT WILL Mount messages : ", data);
    this.setState({ data: data})
  });
}

  render() {
    const match = this.props.match;
    //console.log(this.state.data);
   const repos = this.state.data.map((el) => <div> <li>{el.name} <NavLink to={`repo${match.url}/${el.name}`}>Details</NavLink></li> </div>);
    return (
      <div>
        <h2>Repositories</h2>
        <p>Complete this example to fecth the git-repositories (via link provided in the exercise),
          and populate the ul below with the name for each repository.
        </p>
        <ul>
        {repos}
        </ul>
      </div>
    )
  }
}

// <Route path={`/repo/${this.state.data.name}/:name`} render={(props) => (<Repository {...props} component={Repository} />)} />

const App = () => (
  <Router>
    <div>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/repositories">Reposistories</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/about" component={About} />
    
      </Switch>
    </div>
  </Router>
)
export default App

