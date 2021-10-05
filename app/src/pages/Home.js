import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/home.css'
import logo from "../style/black logo.png"
import { Button } from 'react-bootstrap';


function Home(){

    return(
              
        <div className="home-backround text-center" style = {{height:"93vh"}}>
            <img src={logo} alt="logo" className="logo"/>

            <div className="row justify-content-center mt-5">

                <div class='is-grouped'>

                    <Link to="DriveReq" >
                        <button class="btn1 mr-5">בקשת נסיעה</button>

                    </Link>

                    <Link to="Driver">
                        <button class="btn2">הצעת עזרה</button>

                    </Link>

                    </div>          
           </div>
        </div>
    )
}

export default Home;