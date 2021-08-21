import React from 'react';
import { useState,useRef } from 'react';
import { Alert } from "react-bootstrap"
import Button  from 'react-bootstrap/Button';
import '../style/Login.css';
import { Link,useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"









function Login(){

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("driver")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
    
    

    return(
    <div class="container-fluid log-bg  ">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 "></div>
            <div class="col-md-4 col-sm-4 col-xs-12 ">
            <h1 class="text-center">כניסה</h1>
            {error && <Alert variant="danger">{error}</Alert>}
                <form class="from-container text-light log-con " onSubmit={handleSubmit}>
                    

                    <div class="form-group">
                        <h5 class=" text-right">שם משתמש</h5>
                            <input placeholder="Example@Example.com" class="form-control  text-right" ref={emailRef}></input>
                    </div>
                    <div class="form-group">
                        <h5 class=" text-right">סיסמה</h5>
                            <input type="password" placeholder="הכנס סיסמה" class="form-control text-right"  ref={passwordRef}></input>
                    </div>
                            <Button variant="dark" type="submit" block  disabled={loading}>התחברות</Button>
                       
                    
                        <Link to="/Register">
                            <Button variant="dark"  block  className="log-btn" >הרשמה</Button>
                        </Link>
            
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;