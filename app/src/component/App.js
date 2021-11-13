import React from 'react';
import '../style/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from '../pages/Login';
import Register from '../pages/Register';
import DriveReq from '../pages/DriveReq'
import Profile from '../pages/Profile';
import Driver from '../pages/Driver';
import FutureDrive from '../pages/FutureDrive'
import PreviousDrive from '../pages/PreviousDrive'
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"
import Footer from './Footer';
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import CardProfile from '../pages/CardProfile'
import Terms from '../pages/Terms'
import Donations from '../pages/Donations'
import Associations from '../pages/Associations'
import Taxi from '../pages/Taxi'
import Manager from '../pages/Manager'
import UsersList from '../pages/UsersList'
import Messages from '../pages/Messages'




function App(p) {

  return (
      
      <Router>

    <AuthProvider>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Register" component={Register}/>
          <PrivateRoute path="/driver" component={Driver}/>
          <Route path="/DriveReq" component={DriveReq}/>
          <PrivateRoute path="/Profile" component={Profile}/>
          <Route path="/FutureDrive" component={FutureDrive}/>
          <Route path="/PreviousDrive" component={PreviousDrive}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/CardProfile" component={CardProfile}/>
          <Route path="/home" component={Home}/>
          <Route path="/Terms" component={Terms}/>
          <Route path="/Donations" component={Donations}/>
          <Route path="/Associations" component={Associations}/>
          <Route path="/Taxi" component={Taxi}/>
          <Route path="/Manager" component={Manager}/>
          <Route path="/UsersList" component={UsersList}/>
          <Route path="/Messages" component={Messages}/>
          <Route path="*" />
          
        </Switch>
        </AuthProvider>

        <Footer/>

      
      </Router>   
  );
}

export default App;
