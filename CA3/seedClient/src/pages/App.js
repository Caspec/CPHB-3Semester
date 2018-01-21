import React from "react"
import {Route, Switch } from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import UserPage from "./UserPage";
import RandomPage from "./RandomPage";
import AdminPage from "./AdminPage";
import AllUsersPage from "./AllUsersPage";
import TopMenu from "./TopMenu";
import RegisterUser from './RegisterUser';
import Place from './Place';
import AllPlaces from './AllPlaces';
import CreatePlace from './CreatePlace';
import AdminEdit from './AdminEdit';


function App() {
  return (
    <div>
      <TopMenu />
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/about" component={About} />
      <Route path="/user" component={UserPage} />
      <Route path="/users" component={AllUsersPage} />
      <Route path="/random" component={RandomPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/registeruser" component={RegisterUser}/>
      <Route path="/place/:placename" component={Place}/>
      <Route path="/allplaces" component={AllPlaces}/>
      <Route path="/createplace" component={CreatePlace}/>
      <Route path='/edit/' component={AdminEdit} />
      </Switch>
    </div>
  )
}
export default App;