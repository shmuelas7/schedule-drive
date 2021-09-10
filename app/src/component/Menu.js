import {React,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';




import Car from "../icon/Car.png"
import user from "../icon/user.png";
import Wheel from "../icon/Wheel.png";
import caRQ from "../icon/carRQ.png";
import alldrive from "../icon/alldrive.png"
import logo from "../style/logo.png"




function Menu(){


    return(
        <menu>

           
        <div className="text-center ">
            <img src={logo} alt="logo " className="logo"/>
        </div>

        <div className="row">

            <div className="col-md-4 col-sm-6 col-xs-6 text-center">
               <Link to="Profile" >
               <img src={user} alt="img" className="icon"/>
               <br/>
                   <label className="text-center"> אזור אישי</label>
               </Link> 
           </div>

           <div className="col-md-4 col-sm-6 col-xs-6 text-center">
           <Link to="PreviousDrive" >
           <img src={Wheel} alt="img" className="icon"/>
                <br/>
               <label>היסטורית נסיעות</label>
            </Link>
           </div>

           <div className="col-md-4 col-sm-6 col-xs-6 text-center ">
           <Link to="FutureDrive" >
           <img src={Car} alt="img" className="icon"/>
                <br/>
               <label>הנסיעות שלי</label>
            </Link>
           </div>
           <div className="col-md-6 col-sm-6 col-xs-6 text-center ">
            <Link to="Driver">
                <img src={alldrive} alt="img" className="icon" />
                <br/>
                <label>כל הנסיעות</label>
            </Link>
           </div>

           <div className="col-md-6 col-sm-6 col-xs-6 text-center ">
           <Link to="DriveReq" >
           <img src={caRQ} alt="img" className="icon"/>
                <br/>
               <label>בקשת נסיעה </label>
            </Link>
           </div>
       </div>
       </menu>
    );
}

export default Menu;