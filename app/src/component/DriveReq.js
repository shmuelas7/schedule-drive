import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Nav from "./Nav";



function Req(){

    return(
        <div class="container-fluid Req-bg">
            <Nav/>
 
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12 "></div>
               
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <h1 class="text-center">  הכנס זמני נסיעה ויעד</h1>
                        <input  type="date" placeholder="תאריך יציאה"class="form-control " required></input>
                        <input placeholder="מוצא" class="form-control text-right" required ></input>
                        <input placeholder="יעד" class="form-control text-right" required ></input>
                        <input  type="time" placeholder="שעה" class="form-control " required ></input>

                    </div>
                </div>
    </div>
    );
}

export default Req;