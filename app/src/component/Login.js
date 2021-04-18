import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Login.css';
import { Link } from 'react-router-dom';







function Login(){


    return(
    <div class="container Login text-*-center">
        <h1 class="text-center">התחברות</h1>
        <div class="row">
            <div class="col-lg-4 col-xs-12">
                <form>
                    <label for="email">:מייל</label>
                        <br/>
                        <input placeholder="הכנס מייל" class="form-control"></input>
                            <label for="pwd">:סיסמה</label>
                            <br/>
                            <input type="password" placeholder="הכנס סיסמה" class="form-control" ></input>
                            <Button type="button" class="btn btn-primary" >התחברות</Button>
        
                    <Link to="/Register">
                        <Button type="button" class="btn btn-primary">הרשמה</Button>
                    </Link>
                    </form>
            </div>
        </div>
    </div>
        
    );
}

export default Login;