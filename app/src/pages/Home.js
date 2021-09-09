import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/nav.css';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Button  from 'react-bootstrap/Button';
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

            <div className="col-md-6 col-sm-12 col-xs-12 text-center ">
                <br/>
           <Link to="DriveReq" >
            <Button variant="success" size="lg">
                    בקשת נסיעה
                </Button>{' '}
            </Link>
           
           </div>

           <div className="col-md-6 col-sm-12 col-xs-12 text-center ">
               <br/>
           <Link to="Driver" >
           <Button variant="primary" size="lg">
                                  הצעת עזרה
                </Button>{' '}
            </Link>
           </div>


        </div>
        </div>


    )
}

export default Home;