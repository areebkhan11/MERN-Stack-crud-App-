
import NavBar from "./components/Navbar";
import Code from "./components/Code";
import AllUsers from "./components/AllUsers"
import AddUser from "./components/AddUser";

import {BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <NavBar />
   <Switch >
   <Route exact path = "/" component = {Code} />
   <Route exact path = "/AllUsers" component = {AllUsers} />
   <Route exact path = "/AddUser" component = {AddUser} />
   </Switch >
   </BrowserRouter>
  );
}

export default App;
