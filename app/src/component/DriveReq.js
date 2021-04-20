import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Req(){

    return(
        <div class="container" dir="rtl">
            <form class="was-validated" >
                <div class="row">
                    <div class="col-lg-4 col-xs-12">
                        <input placeholder="תאריך יציאה" class="form-control" required></input>
                        <input placeholder="מוצא" class="form-control" required ></input>
                        <input placeholder="יעד" class="form-control" required ></input>
                        <input placeholder="שעה" class="form-control" required ></input>


                    </div>
                </div>
                <div class="col-lg-4 col-xs-12">
                    <Button  class="btn btn-primary">אשר נסיעה</Button>
                </div>

                <div class="col-lg-4 col-xs-12">
                    <Button class="btn btn-primary">יומן נסיעות שבוצעו</Button>
                </div>

                <div class="col-lg-4 col-xs-12">
                    <Button   class="btn btn-primary">יומן נסיעות מתוכננות</Button>
                </div>


                
            </form>
            </div>

    );
}

export default Req;