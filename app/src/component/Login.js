import React from 'react';
import Button  from 'react-bootstrap/Button';
import '../style/Login.css';
import { Link } from 'react-router-dom';







function Login(){


    return(
    <div class="container-fluid log-bg  ">
        <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12 "></div>
            <div class="col-md-4 col-sm-4 col-xs-12 ">
                <form class="from-container text-light">
                    <h1 class="text-center">כניסה</h1>
                    <div class="form-group">
                        <h5 class=" text-right">שם משתמש</h5>
                            <input placeholder="Example@Example.com" class="form-control"></input>
                    </div>
                    <div class="form-group">
                        <h5 class=" text-right">סיסמה</h5>
                            <input type="password" placeholder="הכנס סיסמה" class="form-control" ></input>
                    </div>
                    <div>
                        <Link to ="DriveReq/">
                            <Button variant="dark"  block>התחברות</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Register">
                            <Button variant="dark"  block  className="log-btn" >הרשמה</Button>
                        </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;