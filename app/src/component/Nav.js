
import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/nav.css';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Button  from 'react-bootstrap/Button';

import exit from "../icon/exit.png"
import Car from "../icon/Car.png"
import Icon from "../icon/icon_profile";
import Wheel from "../icon/Wheel.png";
import caRQ from "../icon/carRQ.png";




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
            <div class="text-center logo">
            </div>
        <div class="row">

            <div class="col-md-2 col-sm-12 col-xs-12 text-center">
               <Link to="Profile" >
               <Icon/>
                   <label class="text-center"> אזור אישי</label>
               </Link> 
           </div>

           <div class="col-md-2 col-sm-12 col-xs-12 text-center ">
           <Link to="PreviousDrive" >
           <img src={Wheel} alt="img"/>
                <br/>
               <label>נסיעות שבוצעו</label>
            </Link>
           </div>

           <div class="col-md-2 col-sm-12 col-xs-12 text-center ">
           <Link to="FutureDrive" >
           <img src={Car} alt="img"/>
                <br/>
               <label>נסיעות עתידיות</label>
            </Link>
           </div>

           <div class="col-md-2 col-sm-12 col-xs-12 text-center ">
           <Link to="DriveReq" >
           <img src={caRQ} alt="img"/>
                <br/>
               <label>בקשת נסיעה </label>
            </Link>
           </div>
           <div class="col-md-2 col-sm-12 col-xs-12 text-center ">
           <Link to="DriveReq" >
               <label>בקשת נסיעה </label>
            </Link>
           </div>
           <div class="col-md-2 col-sm-12 col-xs-12 text-center ">
                <Button variant="link" onClick={handleLogout}>
                    <img src={exit} alt="img"/>
                    <br/>
                    <label>יציאה </label>
                </Button>
                

           </div>
       </div>

       </nav>
    );
}

export default Nav;