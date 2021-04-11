//import React from 'react';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ride_request.css';


function ride_request(){
    return(
        <div class="container">
            <form>
                <h1>בקשת נסיעה </h1>
                <input type="date"  class="form-control"></input>

            </form>
        </div>
    )
}