import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css';
import { Link } from 'react-router-dom';







function Login(){


    return(
    <div class="container Login">
        <h1>התחברות</h1>
                    <form>
                        <div>
                            <label for="email">:מייל</label>
                            <br/>
                            <input placeholder="הכנס מייל" class="form-control"></input>
                        </div>
                        <div >
                            <label for="pwd">:סיסמה</label>
                            <br/>
                            <input type="password" placeholder="הכנס סיסמה" class="form-control" ></input>
                        </div>
                        <div>
                            <Button type="button" class="btn btn-primary" >התחברות</Button>
                        </div>
                        <div>
                    <Link to="/Register" >
                        <Button type="button" class="btn btn-primary">הרשמה</Button>
                    </Link>
                        </div>
                    </form>
        </div>
        
    );
}

export default Login;