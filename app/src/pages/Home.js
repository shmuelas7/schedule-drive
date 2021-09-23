
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import '../style/home.css'

import logo from "../style/black logo.png"
import img1 from '../style/backwards.png'
import img2 from '../style/arrow.png'




  

function Home(){

    return(
        
        <div className="home-backround text-center  ">
            <img src={logo} alt="logo " className="logo"/>
        <div className="row">

            <div className="col-md-6 col-sm-6 col-xs-6 ">
                <Link to="DriveReq" >
                        <h5>בקשת נסיעה</h5>
                        <br/>
                        <img src={img1} alt="img" className="arrow" />
                 </Link>
           </div>

           <div className="col-md-6 col-sm-6 col-xs-6 ">
                <Link to="Driver" >
                        <h5>הצעת עזרה</h5>
                        <br/>
                        <img src={img2} alt="img" className="arrow"/>
                </Link>
           </div>
        </div>
        </div>


    )
}

export default Home;