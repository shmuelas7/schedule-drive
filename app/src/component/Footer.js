import {React} from 'react';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer(){

    return(

    <footer className="bg-dark text-center text-white" dir="rtl">
    
    <div className="container p-4 pb-0">
    <strong className="text-right ">ליצירת קשר עם העמותה</strong>

    
        <form action="">

            <div className="row d-flex justify-content-center">
            <div className="col-auto">
                <p className="pt-2 ">
                </p>
            </div>
            <div className="col-md-5 col-12">

                <div className="form-outline form-white mb-4">
                <textarea placeholder="כתוב כאן" className="form-control text-right"></textarea>

                </div>
            </div>



            <div className="col-auto">

                <Button type="submit" className="btn btn-outline-light mb-4">
                שלח
                </Button>
            </div>
            
            </div>
    
        </form>

    
    </div>

    <div className="text-center p-3">
        © האתר נבנה ע"י : 
        <a className="text-white"> שמואל אשרוב ואסף הגר</a>
    </div>

    </footer>
  
    );
}
export default Footer