import {React} from 'react';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer(){

    return(

    <footer className="bg-dark text-center text-white">
    
    <div className="container p-4 pb-0">
    
        <form action="">

            <div className="row d-flex justify-content-center">
            <div className="col-auto">
                <p className="pt-2 ">
                <strong className="text-right ">ליצירת קשר עם העמותה</strong>
                </p>
            </div>
            <div className="col-md-5 col-12">

                <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example2" className="form-control" />
                <label className="form-label" for="form5Example2">הכנס אימייל</label>
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

    <div className="text-center p-3" >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>

    </footer>
  
    );
}
export default Footer