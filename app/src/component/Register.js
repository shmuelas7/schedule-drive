
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap"
import  '../style/Register.css';
import { useState,useRef} from 'react';
import { useAuth } from "../contexts/AuthContext"
import {  useHistory } from "react-router-dom"


 function Register(){

        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const { signup } = useAuth()
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
        const history = useHistory()
      
        async function handleSubmit(e) {
          e.preventDefault()
      
          if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }
      
          try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
          } catch {
            setError("Failed to create an account")
          }
      
          setLoading(false)
        }
    


    return(
        <div class="container-fluid reg-bg">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12 "></div>
                <div class="col-md-4 col-sm-4 col-xs-12 ">
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 " >
                {error && <Alert variant="danger">{error}</Alert>}
                <h1 class="text-center">טופס הרשמה</h1>
                    <form class="from-container text-light" id="user-data" onSubmit={handleSubmit}>
                        
                        <div class="from-group">
                            <h5 class=" text-right">שם פרטי</h5>
                            <input placeholder="שם פרטי*" class="form-control text-right" name="firstName" type="text"    required></input>
                        </div>
                        <div>
                            <h5 class=" text-right" >שם משפחה</h5>
                            <input placeholder="שם משפחה*" class="form-control text-right" name="lastName" required ></input>
                        </div>
                        <div>
                            <h5 class=" text-right">מייל</h5>
                            <input placeholder="מייל*" class="form-control text-right" required  ref={emailRef}></input>
                        </div>
                        <div>
                            <h5 h5 class=" text-right">טלפון</h5>
                            <input placeholder="מספר נייד*" class="form-control text-right" required ></input>
                        </div>
                        <div>
                            <h5 class=" text-right" >אזור</h5>
                            <input placeholder="בחר אזור*" class="form-control text-right" required ></input>
                        </div>
                        <div>
                            <h5 class=" text-right">  סיסמה</h5>
                            <input type="password" placeholder="סיסמה*" class="form-control text-right" required id="pwd" name="password" ref={passwordRef}></input>
                        </div>
                        <div>
                            <h5 class=" text-right">אימות סיסמה</h5>
                            <input type="password" placeholder="אישור סיסמה*" class="form-control text-right" required id="pwd" name="password" ref={passwordConfirmRef}></input>
                        </div>
                        <h5 class=" text-right">הוספת תמונת פרופיל</h5>
                        <div class="custom-file">
                             <input type="file" class="custom-file-input" id="customFile"/>
                            <label class="custom-file-label " for="customFile">בחר תמונה</label>
                        </div>
                      
                        <Button type="submit" disabled={loading} variant="dark"  block  className="log-btn">שלח</Button>              
                    </form>
                </div>
            </div>
        </div>
    );
}

 export default Register;