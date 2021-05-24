import React from 'react';
import Button from 'react-bootstrap/Button';
import '../style/DriveReq.css';
import Nav from "./Nav";



function Req(){

    return(
        <div class="container-fluid Req-bg">
            <Nav/>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12 "></div>
                <div class="col-md-4 col-sm-4 col-xs-12 "></div>
               
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <h1 class="text-center h1-d">בקשת נסיעה</h1>
                        <input  type="date" placeholder="תאריך יציאה"class="form-control  input-d" required></input>
                        <input placeholder="מוצא" class="form-control text-right input-d" required ></input>
                        <input placeholder="יעד" class="form-control text-right input-d" required ></input>
                        <input  type="time" placeholder="שעה" class="form-control input-d " required ></input>
                        <Button type="submit" variant="dark"  block className="log-btn">שלח</Button>

                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <h5 class="form-check-label " for="inlineRadio1">מלווה</h5>
                        </div>
                        <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <h5 class="form-check-label" for="inlineRadio2">כיסא גלגלים</h5>
                        </div>
                    </div>
                   
                </div>
    </div>
    );
}

export default Req;