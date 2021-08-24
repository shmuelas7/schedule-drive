
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap"
import  '../style/Register.css';
import { useState,useRef} from 'react';
import { useAuth } from "../contexts/AuthContext"
import {  useHistory } from "react-router-dom"
import firebase from 'firebase';



 function Register(){

        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const { signup } = useAuth()
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
        const history = useHistory()
        const [firstname,setfirstname]=useState("")

        const ref=firebase.firestore().collection("user")
      
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

        //   ref
        //   .doc(firstname)
        //   .set(firstname)
        //   .catch((err)=>console.log(err))
         

        }
    


    return(
        <div className="container-fluid reg-bg">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 "></div>
                <div className="col-md-4 col-sm-4 col-xs-12 ">
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 " >
                {error && <Alert variant="danger">{error}</Alert>}
                <h1 className="text-center">טופס הרשמה</h1>
                    <form className="from-container text-light" id="user-data" onSubmit={handleSubmit}>
                        
                        <div className="from-group">
                            <h5 className=" text-right">שם פרטי</h5>
                            <input placeholder="שם פרטי*" className="form-control text-right" name="firstName" type="text" onChange={(e)=>setfirstname(e.target.value)}   required></input>
                        </div>
                        <div>
                            <h5 className=" text-right" >שם משפחה</h5>
                            <input placeholder="שם משפחה*" className="form-control text-right" name="lastName" required ></input>
                        </div>
                        <div>
                            <h5 className=" text-right">מייל</h5>
                            <input placeholder="מייל*" className="form-control text-right" required  ref={emailRef}></input>
                        </div>
                        <div>
                            <h5  className=" text-right">טלפון</h5>
                            <input placeholder="מספר נייד*" className="form-control text-right" required ></input>
                        </div>
                        <div>
                            <h5 className=" text-right" >אזור</h5>
                            <input placeholder="בחר אזור*" className="form-control text-right" required ></input>
                        </div>
                        <div>
                            <h5 className=" text-right">  סיסמה</h5>
                            <input type="password" placeholder="סיסמה*" className="form-control text-right" required  name="password" ref={passwordRef} autoComplete="off"></input>
                        </div>
                        <div>
                            <h5 className=" text-right">אימות סיסמה</h5>
                            <input type="password" placeholder="אישור סיסמה*" className="form-control text-right" required  name="password" ref={passwordConfirmRef} autoComplete="off"></input>
                        </div>
                        <h5 className=" text-right">הוספת תמונת פרופיל</h5>
                        <div className="custom-file">
                             <input type="file" className="custom-file-input" id="customFile"/>
                            <label className="custom-file-label ">בחר תמונה</label>
                        </div>
                      
                        <Button type="submit" disabled={loading} variant="dark"  block  className="log-btn">שלח</Button>              
                    </form>
                </div>
            </div>
        </div>
    );
}

 export default Register;