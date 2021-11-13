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

            <h1> רשימת משתמשים</h1>


    </div>
    </div>

    )
}

export default Manager;