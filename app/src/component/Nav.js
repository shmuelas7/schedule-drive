
import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {  Alert } from "react-bootstrap"
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
import logo from "../style/black logo.png"
import managerLogo from '../style/manager.png'
import { useEffect } from 'react';
import {dbUser} from '../firebase'
//import MangerPage from '../pages/Manager'




function Nav(){

    const [error, setError] = useState("")
    const { logout,currentUser } = useAuth()
    const history = useHistory()


    useEffect(getdata)

    let user=""
     async function getdata(){
      await dbUser.doc(currentUser.uid).get().then((u)=>{
          user=u.data()
        
      })
       if(user.imgUrl !== null ){ 
      let element = document.getElementById('img');
        element.src = user.imgUrl
        element.className= " rounded-circle iconi "
       }
       if(currentUser.uid === "p1QOseZ2wgOwBIdBUeKacgTOaaW2"){
           let img =document.getElementById("manager")
           img.src= managerLogo;
           img.className="icon mt-3"
           img.onclick = (e) => {
            history.push({pathname:'/Manager'})
          };
       }
    }
    
 
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
        <nav className=" container-fluid bg-whit">
        <div className="text-center row ">
            <div className="col-md-10 col-sm-12 col-xs-12">
                <img src={logo} alt="logo " className="logo"/>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 text">
                <img id="manager"/>
            </div>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="row">

            <div className="col-md-2 col-sm-12 col-xs-12 text-center">
               <Link to="Profile" >
               <img src={user} alt="img" className="iconi" id="img"/  >
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
                <img src={alldrive} alt="img" className="icon"  />
                <br/>
                <label>כל הנסיעות</label>
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