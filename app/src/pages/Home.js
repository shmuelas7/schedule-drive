import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/home.css'
import logo from "../style/black logo.png"
import Button  from 'react-bootstrap/Button';
import help2 from "../icon/help2.png"
import ride from "../icon/ride.png"

function Home(){

    return(
    <div className="p-3  bg-primary">
        <div className=" text-center" style = {{height:"90.0vh"}}>
            <img src={logo} alt="logo" className="logo mb-5"/>

            <div className="row justify-content-center mt-5">

                <div className='is-grouped col-lg-6 col-md-6 col-sm-12 '>
                    <Link to="DriveReq" >
                        <img src={ride} alt="img" className="iconho"/>
                        <br/>
                        <h2>בקשת נסיעה </h2>
                    </Link>
                </div>
                <div className='is-grouped col-lg-6 col-md-6 col-sm-12 '>
                    <Link to="Driver">
                        <img src={help2} alt="img" className="iconho"/>
                        <br/>
                        <h2> הצעת עזרה </h2>                    
                    </Link>
                </div>
                     
        </div>
    </div>
    </div>

    )
}

export default Home;