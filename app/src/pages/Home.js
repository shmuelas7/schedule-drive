import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/home.css'
import logo from "../style/black logo.png"
import { Button } from 'react-bootstrap';

function Home(){

    return(
        
        <body>
        <div className="home-backround text-center h-100 d-inline-block" >
            <img src={logo} alt="logo" className="logo"/>

            <div className="row justify-content-center mt-5 ">

                <div className='is-grouped  ' >

                    <Link to="DriveReq" >
                        <Button variant="outline-info   mb-4" size="xxl">בקשת נסיעה</Button>

                    </Link>


                    <Link to="Driver">
                        <Button variant="outline-success  mb-4" size="xxl">הצעת עזרה</Button>

                    </Link>

                    </div>
                
           </div>


        </div>
        </body>
  


    )
}

export default Home;