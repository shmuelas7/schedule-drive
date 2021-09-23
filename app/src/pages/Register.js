import React from 'react';
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap"
import  '../style/Register.css';
import { useState,useRef} from 'react';
import { useAuth } from "../contexts/AuthContext"
import {  useHistory } from "react-router-dom"
import firebase from 'firebase';
import "firebase/firestore";
import logo from '../style/black logo.png'
import {db} from '../firebase'



 function Register(){

        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const { signup,currentUser } = useAuth()
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
        const history = useHistory()
        const [firstname,setfirstname]=useState("")
        const [lasttname,setlastname]=useState("")
        const [phone,setphone]=useState("")
        const [area,setarea]=useState("")
        const [age,setage]=useState(0);

        //const data="https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=5"


    
        // useEffect(() => {
        //     let x =fetch (data)
        //     . then(x => x.json())
        //     .then(x=>x);
        //    console.log(JSON.stringify(x))
        // }, [area])

        


        async function log(){
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


    function adddata(){
        console.log(currentUser.uid)
     db.doc(currentUser.uid).set({
        first_name:firstname,
        last_name:lasttname,
        phone_number:phone,
        area:area,
        age:age
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
    
    console.log(firebase.auth().currentUser.uid)
  

    }
      
        function handleSubmit(e) {
          e.preventDefault()
          log()
          adddata()
        }


    


    return(
        <div className="container bg-primary">

            <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12 "></div>
                
                
                <div className="col-md-6 col-sm-12 col-xs-12" >
                    {error && <Alert variant="danger">{error}</Alert>}  
                    <form className=" bg-light rounded  border border-dark mb-2  mt-2"  onSubmit={handleSubmit}>
                    <img src={logo} alt="logo" className="rg-logo"/>
                    <h1 className="text-center">טופס הרשמה</h1>
                    
                    <div className="row">
                        <div className="from-gtoup col-md-6 col-sm-12">
                            <h5 className=" text-right" >שם משפחה</h5>
                            <input placeholder="שם משפחה*" className="form-control text-right" name="lastName" required onChange={(e)=>setlastname(e.target.value)} ></input>

                            <h5 className=" text-right">מייל</h5>
                            <input placeholder="מייל*" className="form-control text-right" required  ref={emailRef}></input>

                            <h5 className=" text-right">גיל</h5>
                            <input type="number" placeholder="גיל" className="form-control text-right" required  name="age" onChange={(e)=>setage(e.target.value)}></input>

                            <h5 className=" text-right">אימות סיסמה</h5>
                            <input type="password" placeholder="אישור סיסמה*" className="form-control text-right" required  name="password" ref={passwordConfirmRef} autoComplete="off"></input> 
                    
                        </div>
                        <div className="from-group col-md-6 col-sm-12">
                            <h5 className=" text-right">שם פרטי</h5>
                            <input placeholder="שם פרטי*" className="form-control text-right" name="firstName" type="text" onChange={(e)=>setfirstname(e.target.value)}   required></input>
                        

                            <h5  className=" text-right">טלפון</h5>
                            <input placeholder="מספר נייד*" className="form-control text-right" required onChange={(e)=>setphone(e.target.value)}></input>
                            
                            <h5 className=" text-right" >אזור</h5>
                            <input placeholder="בחר אזור*" className="form-control text-right" id="area" required onChange={(e)=>setarea(e.target.value)} ></input>

                            <h5 className=" text-right">  סיסמה</h5>
                            <input type="password" placeholder="סיסמה*" className="form-control text-right" required  name="password" ref={passwordRef} autoComplete="off"></input>
                            <h5 className=" text-right">הוספת תמונת פרופיל</h5>
                        <div className="custom-file">
                             <input type="file" className="custom-file-input" id="customFile"/>
                            <label className="custom-file-label ">בחר תמונה</label>
                        </div>
                      
                        </div>

 
                        <Button type="submit" disabled={loading}  variant="success"  block  className="log-btn mx-5 mb-2 btn-lg">שלח</Button>         
                        
                    </div>
                    </form>
                </div>
                <div className="col-3">

                </div>
                
            </div>
           
        </div>
        
    );
}

 export default Register;