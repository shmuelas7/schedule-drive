import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/footer.css"
import { Link } from 'react-router-dom';
function Footer(){

    return(

    <div className="container-fluid">
        <footer className="bg-dark text-center text-white"  dir="rtl">
            <div className="row">
                <div className="col-12">
                    <Link to="contact">
                        <p className="text-center text-info"><b>ליצירת קשר עם העמותה</b></p>
                    </Link>
                    <Link to="gift">
                        <p className="text-center text-success"><b>דף תרומות לעמותה</b></p>
                    </Link>
                </div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-white text-center"><b>האתר נבנה ע"י שמואל אשרוב ואסף הגר ©</b></p>
                </div>
                    
                
            </div>
                
    


    </footer>
    </div>
  
    );
}
export default Footer