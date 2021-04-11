import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';


function Register(){

    return(

        <div class="container" dir="rtl">
            <form class="was-validated" >
              <h1>טופס הרשמה</h1>
                <div class="row">
                    <div class="col-lg-4 col-xs-12">
                        <h5>שם פרטי:</h5>
                        <input placeholder="שם פרטי*" class="form-control" required></input>
                        <h5>שם משפחה:</h5>
                        <input placeholder="שם משפחה*" class="form-control" required ></input>
                        <h5>מייל:</h5>
                        <input placeholder="מייל*" class="form-control" required ></input>
                        <h5>טלפון:</h5>
                        <input placeholder="מספר נייד*" class="form-control" required ></input>
                        <h5> אישור סיסמה:</h5>
                        <input type="password" placeholder="סיסמה*" class="form-control" required id="pwd" name="password"></input>
                        <h5>אימות סיסמה:</h5>
                        <input type="password" placeholder="אישור סיסמה*" class="form-control" required id="pwd" name="password"></input>
                        <Button type="submit" id="btn" class="btn btn-primary">אישור</Button>
                    </div>
                </div>              
            </form>
        </div>

    );
}

export default Register;