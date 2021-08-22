
import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/nav.css';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Button  from 'react-bootstrap/Button';

import exit from "../icon/exit.png"
import Car from "../icon/Car.png"
import user from "../icon/user.png";
import Wheel from "../icon/Wheel.png";
import caRQ from "../icon/carRQ.png";
import alldrive from "../icon/alldrive.png"
import logo from "../style/logo.png"




function Nav(){

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/")
      } catch {
        setError("Failed to log out")
      }
    }

    return(
        <nav>

           
        <div className="text-center ">
            <img src={logo} alt="logo " className="logo"/>
        </div>

        <div className="row">

            <div className="col-md-2 col-sm-12 col-xs-12 text-center">
               <Link to="Profile" >
               <img src={user} alt="img" className="icon"/>
               <br/>
                   <label className="text-center"> אזור אישי</label>
               </Link> 
           </div>

           <div className="col-md-2 col-sm-12 col-xs-12 text-center">
           <Link to="PreviousDrive" >
           <img src={Wheel} alt="img" className="icon"/>
                <br/>
               <label>היסטורית נסיעות</label>
            </Link>
           </div>

           <div className="col-md-2 col-sm-12 col-xs-12 text-center ">
           <Link to="FutureDrive" >
           <img src={Car} alt="img" className="icon"/>
                <br/>
               <label>הנסיעות שלי</label>
            </Link>
           </div>
           <div className="col-md-2 col-sm-12 col-xs-12 text-center ">
            <Link to="Driver">
                <img src={alldrive} alt="img" className="icon" />
                <br/>
                <label>כול הנסיעות</label>
            </Link>
           </div>

           <div className="col-md-2 col-sm-12 col-xs-12 text-center ">
           <Link to="DriveReq" >
           <img src={caRQ} alt="img" className="icon"/>
                <br/>
               <label>בקשת נסיעה </label>
            </Link>
           </div>

           <div className="col-md-2 col-sm-12 col-xs-12 text-center ">
                <Button variant="link" onClick={handleLogout}>
                    <img src={exit} alt="img" className="icon"/>
                    <br/>
                    <label>יציאה </label>
                </Button>
                

           </div>
       </div>
       </nav>
    );
}

export default Nav;