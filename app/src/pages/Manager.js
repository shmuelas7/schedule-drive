import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/manager.css'
import logo from "../style/black logo.png"
import mes from "../icon/mes.png";
import list from "../icon/list.png";


function Manager(){

    return(
    <div className="p-3  bg-info">
        <div className=" text-center" style = {{height:"90.0vh"}}>
            <img src={logo} alt="logo" className="logo mb-5"/>

            <h1>מנהל מערכת</h1>

            <div className="row justify-content-center mt-5">

                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <Link to="UsersList" >
                        <img src={list} alt="img" className="icon2"/>
                                <br/>
                        <label> רשימת משתמשים</label>
                    </Link>
                </div>

                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <Link to="Messages" >
                        <img src={mes} alt="img" className="icon2"/>
                                <br/>
                        <label> הודעות נכנסות</label>
                    </Link>
                </div>

        </div>
    </div>
    </div>

    )
}

export default Manager;