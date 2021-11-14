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
import ForgotPassword from "../pages/ForgotPassword"




function App(p) {

  return (
      
      <Router>

    <AuthProvider>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Register" component={Register}/>
          <PrivateRoute path="/driver" component={Driver}/>
          <PrivateRoute path="/DriveReq" component={DriveReq}/>
          <PrivateRoute path="/Profile" component={Profile}/>
          <PrivateRoute path="/FutureDrive" component={FutureDrive}/>
          <PrivateRoute path="/PreviousDrive" component={PreviousDrive}/>
          <Route path="/contact" component={Contact}/>
          <PrivateRoute path="/CardProfile" component={CardProfile}/>
          <PrivateRoute path="/home" component={Home}/>
          <Route path="/Terms" component={Terms}/>
          <Route path="/Donations" component={Donations}/>
          <Route path="/Associations" component={Associations}/>
          <Route path="/Taxi" component={Taxi}/>
          <PrivateRoute path="/Manager" component={Manager}/>
          <PrivateRoute path="/UsersList" component={UsersList}/>
          <PrivateRoute path="/Messages" component={Messages}/>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="*" />
          
        </Switch>
        </AuthProvider>

        <Footer/>

      
      </Router>   
  );
}

export default App;
