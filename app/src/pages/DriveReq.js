import React from 'react';
import Button from 'react-bootstrap/Button';
import '../style/DriveReq.css';
import Nav from "../component/Nav";



function Req(){

    return(
        <div className="container-fluid Req-bg">
            <Nav/>
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 "></div>
                <div className="col-md-4 col-sm-4 col-xs-12 "></div>
               
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <h1 className="text-center h1-d">בקשת נסיעה</h1>
                        <input  type="date" placeholder="תאריך יציאה"className="form-control  input-d" required></input>
                        <input placeholder="מוצא" className="form-control text-right input-d" required ></input>
                        <input placeholder="יעד" className="form-control text-right input-d" required ></input>
                        <input  type="time" placeholder="שעה" className="form-control input-d " required ></input>
                        <div className="text-right">
                            <label>הערות</label>
                            <br/>
                            <textarea></textarea>
                        </div>
                        

                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <h5 className="form-check-label " >מלווה</h5>
                        </div>
                        <div className="form-check form-check-inline ">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <h5 className="form-check-label" >כיסא גלגלים</h5>
                        
                        </div>
                        <Button type="submit" variant="primary"  block className="log-btn">שלח</Button>
                    </div>
                   
                </div>
    </div>
    );
}

export default Req;