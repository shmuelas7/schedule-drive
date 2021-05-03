import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Req(){

    return(
        <div class="container-fluid Req-bg">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12 "></div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <input placeholder="תאריך יציאה" class="form-control" required></input>
                        <input placeholder="מוצא" class="form-control" required ></input>
                        <input placeholder="יעד" class="form-control" required ></input>
                        <input placeholder="שעה" class="form-control" required ></input>


                    </div>
                </div>
            

            </div>
    );
}

export default Req;