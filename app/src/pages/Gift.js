import {React} from 'react';
import Nav from "../component/Nav";
import Button from 'react-bootstrap/Button';



function Gift(){


    return(
        <div className="container-fluid">
            <Nav/>
            
            <div className="bg-warning">
            <div className="row bg-warning">
                <div className="col-md-2 col-sm-4 col-xs-12 "></div>  
                <div className="col-md-8 col-sm-4 col-xs-12 ">
                    <form className=" border border-dark rounded mt-2 mb-2 bg-light">
                        <h1 className="text-center">תרומות לעמותה</h1>
                        <h6 className="text-right">כמה לתרום</h6>
                        <input type="number" placeholder="סכום" className="form-control text-right" required ></input>

                        <h3 className="text-right col-md-7 col-sm-4 col-xs-12 ">פרטים אישיים</h3>
                        <input placeholder="שם מלא" className="form-control text-right " required ></input>
                        <input placeholder="פלאפון" className="form-control text-right " required ></input>
                        <input placeholder="מייל" className="form-control text-right " required ></input>
           
                        
                        <div className="text-right">
                            <div className="form-check form-check-inline">
                            <label className="form-check-label">קראתי את התקנון</label>
                                <input className="form-check-input" type="checkbox" value="option1"/>
                            </div>
                 
                        </div>
                        <Button type="submit" variant="primary"  block className="log-btn mb-2">שלח</Button>
                    </form>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12"></div>  
            </div>

       
                <tbody>
                </tbody>
            </div>
        </div>


    )
}

export default Gift;