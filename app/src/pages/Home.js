import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {  Alert } from "react-bootstrap"
import '../style/nav.css';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Button  from 'react-bootstrap/Button';

import exit from "../icon/exit.png"
import helping from "../icon/helping.png"
import help from "../icon/help.png";
import Wheel from "../icon/Wheel.png";
import caRQ from "../icon/carRQ.png";
import alldrive from "../icon/alldrive.png"
import logo from "../style/black logo.png"


  

function Home(){

    const [error, setError] = useState("")
    const { logout } = useAuth()
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
        
        <div className="container-fluid bg-light  ">
            <div className="text-center  ">
            <img src={logo} alt="logo " className="logo"/>
            <h1 className="text-center">דף הבית</h1>

        </div>

        <div className="row bg-warning">

            <div className="col-md-4 col-sm-12 col-xs-12 text-center ">
           <Link to="DriveReq" >
           <img src={helping} alt="img" className="icon"/>
                <br/>
               <label>בקשת נסיעה </label>
            </Link>
           </div>

           <div className="col-md-4 col-sm-12 col-xs-12 text-center ">
           <Link to="Driver" >
           <img src={help} alt="img" className="icon"/>
                <br/>
               <label>הצעת עזרה</label>
            </Link>
           </div>

           <div className="col-md-3 col-sm-12 col-xs-12 text-center ">
                <Button variant="link" onClick={handleLogout}>
                    <img src={exit} alt="img" className="icon"/>
                    <br/>
                    <label>יציאה </label>
                </Button>
           </div>
           
        </div>
        </div>


    )
}

export default Home;