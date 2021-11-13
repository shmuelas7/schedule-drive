import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/manager.css'
import logo from "../style/black logo.png"


function Manager(){

    return(
    <div className="p-3  bg-info">
        <div className=" text-center" style = {{height:"90.0vh"}}>
            <img src={logo} alt="logo" className="logo mb-5"/>

            <h1>הודעות נכנסות </h1>

    </div>
    </div>

    )
}

export default Manager;