import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/home.css'
import logo from "../style/black logo.png"
import Button  from 'react-bootstrap/Button';


function Home(){

    return(
    <div className="p-3  bg-primary">
        <div className=" text-center" style = {{height:"90.0vh"}}>
            <img src={logo} alt="logo" className="logo mb-5"/>

            <div className="row justify-content-center mt-5">

                <div className='is-grouped col-lg-6 col-md-6 col-sm-12 '>
                    <Link to="DriveReq" >
                        <Button className=" btn-xxl mb-4 btn btn-light" block>בקשת נסיעה</Button>
                    </Link>
                </div>
                <div className='is-grouped col-lg-6 col-md-6 col-sm-12 '>
                    <Link to="Driver">
                        <Button className="  btn-xxl btn btn-light " block>הצעת עזרה</Button>
                    </Link>
                </div>
                     
        </div>
    </div>
    </div>

    )
}

export default Home;