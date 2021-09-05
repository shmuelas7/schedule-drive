import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from "../component/Nav";



function Req(){

    return(
        <div className="container-fluid">
            <Nav/>
            <div className="row bg-warning">
                <div className="col-md-2 col-sm-4 col-xs-12 "></div>  
                <div className="col-md-8 col-sm-4 col-xs-12 ">
                    <form className=" border border-dark rounded mt-2 mb-2 bg-light">
                        <h1 className="text-center">בקשת נסיעה</h1>
                        <h6 className="text-right">הכנס תאריך</h6>
                        <input type="date" placeholder="תאריך יציאה" className="form-control input-d" required></input>
                        <h6 className="text-right">מוצא</h6>
                        <input placeholder="מוצא" className="form-control text-right " required ></input>
                        <h6 className="text-right">יעד</h6>
                        <input placeholder="יעד" className="form-control text-right " required ></input>
                        <h6 className="text-right">שעה</h6>
                        <input  type="time" placeholder="שעה" className="form-control" required ></input>
                        <div className="text-right">
                            <h6>הערות</h6>
                            <textarea className="form-control" rows="2"></textarea>
                        </div>
                        
                        <div className="text-right">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox"  value="option1"/>
                                <label className="form-check-label" >כסא גלגלים</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox"  value="option2"/>
                                <label className="form-check-label" >מלווה</label>
                            </div>
                        </div>
                        <Button type="submit" variant="primary"  block className="log-btn mb-2">שלח</Button>
                    </form>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12"></div>  
            </div>
        </div>
    );
}

export default Req;