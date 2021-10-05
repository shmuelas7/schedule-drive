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
                        <Button class="btn1 mr-5" variant="outline-warning mr-5" size="xxl">בקשת נסיעה</Button>

                    </Link>

                    <Link to="Driver">
                        <Button class="btn2" variant="outline-warning" size="xxl">הצעת עזרה</Button>

                    </Link>



                    </div>          
           </div>
        </div>
    )
}

export default Home;