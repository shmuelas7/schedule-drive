import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Icon from "./icon_profile";
import Car from "./Icon_car"
import Wheel from "./Wheel"



function Nav(){

    return(
        <nav>
        <div class="row">
            <div class="col-md-4 col-sm-12 col-xs-12 text-center">
               <Link to="Profile" >
                   <Icon/>
                   <label class="text-center"> אזור אישי</label>
               </Link> 
           </div>

           <div class="col-md-4 col-sm-12 col-xs-12 text-center ">
           <Link to="profile" >
                   <Wheel/>
               <label>נסיעות שבוצעו</label>
            </Link>
           </div>

           <div class="col-md-4 col-sm-12 col-xs-12 text-center ">
           <Link to="profile" >
           <Car/>
               <label>נסיעות עתידיות</label>
            </Link>
           </div>

       </div>
       </nav>
    );
}

export default Nav;