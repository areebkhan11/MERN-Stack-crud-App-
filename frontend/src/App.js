
import NavBar from "./components/Navbar";
import Code from "./components/Code";
import AllUsers from "./components/AllUsers"
import NotFound from "./components/NotFound";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";


import {BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <NavBar />
   <Switch >
   <Route exact path = "/" component = {Code} />
   <Route exact path = "/AllUsers" component = {AllUsers} />
   <Route exact path = "/AddUser" component = {AddUser} />
   <Route exact path = "/Edit/:id" component = {EditUser} />
   <Route component = {NotFound}  />
   </Switch >
   </BrowserRouter>
  );
}

export default App;
