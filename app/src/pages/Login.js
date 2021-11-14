import React from 'react';
import { useState,useRef } from 'react';
import { Alert } from "react-bootstrap"
import Button  from 'react-bootstrap/Button';
import '../style/Login.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import logo from '../style/black logo.png'
import { Link } from "react-router-dom"



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
      history.push("home")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
    

    return(
    <div className="container-fluid bg-primary  ">
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12 "></div>
            <div className="col-md-4 col-sm-4 col-xs-12 ">
            
            {error && <Alert variant="danger">{error}</Alert>}
            
                <form className="from-container  log-con bg-light rounded " onSubmit={handleSubmit}>
                <h1 className="text-center">כניסה</h1>
                    <img src={logo} alt="logo" className="login-logo" />
                    <div className="form-group">
                        <h5 className="text-right">שם משתמש</h5>
                            <input placeholder="Example@Example.com" className="form-control  text-right" ref={emailRef}></input>
                    </div>
                    <div className="form-group">
                        <h5 className=" text-right">סיסמה</h5>
                            <input type="password" placeholder="הכנס סיסמה" className="form-control text-right" autoComplete="on"  ref={passwordRef}></input>
                    </div>
                        <Button variant="dark" type="submit" block  disabled={loading} className="log-btn">התחברות</Button>
                        
                        <Button variant="dark"  block  className="log-btn" onClick={()=>(history.push("/Register"))}>הרשמה</Button>
                        <div className="w-100 text-center mt-3">
                          <Link to="/forgot-password">שכחתי סיסמה</Link>
                          </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;