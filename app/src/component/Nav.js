import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Icon from "../icon/icon_profile";
import Car from "../icon/Icon_car";
import Wheel from "../icon/Wheel";
import caRQ from "../icon/icon_caRQ";
import '../style/nav.css';
import firebase from 'firebase';



function Nav(){

    function signout(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }

    return(
        <nav>
            <div class="text-center logo">
            </div>
        <div class="row">

            <div class="col-md-3 col-sm-12 col-xs-12 text-center">
               <Link to="Profile" >
                   <Icon/>
                   <label class="text-center"> אזור אישי</label>
               </Link> 
           </div>

           <div class="col-md-3 col-sm-12 col-xs-12 text-center ">
           <Link to="PreviousDrive" >
                   <Wheel/>
               <label>נסיעות שבוצעו</label>
            </Link>
           </div>

           <div class="col-md-3 col-sm-12 col-xs-12 text-center ">
           <Link to="FutureDrive" >
            <Car/>
               <label>נסיעות עתידיות</label>
            </Link>
           </div>

           <div class="col-md-3 col-sm-12 col-xs-12 text-center ">
           <Link to="DriveReq" >
                <caRQ/>
               <label>בקשת נסיעה </label>
            </Link>
           </div>
       </div>
       </nav>
    );
}

export default Nav;