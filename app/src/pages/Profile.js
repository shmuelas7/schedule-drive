
import React, { useRef, useState } from "react"
import Button from 'react-bootstrap/Button'
import { Form, Alert } from "react-bootstrap"
import Nav from "../component/Nav"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import firebase from 'firebase'


function Profile(){

    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { updatePassword,currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [area,setarea]=useState("")
    const [phone,setphone]=useState("")

    const db = firebase.firestore().collection("user")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(currentUser.uid)
        if(passwordRef.current.value!=="")
        {
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
        const promises = []
        setLoading(true)
        setError("")

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
          }

          Promise.all(promises)
          .then(() => {
            history.push("/")
          })
          .catch(() => {
            setError("Failed to update account")
          })
          .finally(() => {
            setLoading(false)
          })
        }

          
          console.log(currentUser.uid)
    db.doc(currentUser.uid).update({
       phone:phone,
        area:area
    })
    }

    return(
       
        <div className="container-fluid">
            <Nav/>
            <div className="row  bg-warning">
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
            <div className="col-md-8 col-sm-12 col-xs-12">
             {error && <Alert variant="danger">{error}</Alert>}
                <Form className="border border-dark rounded mt-2 mb-2 bg-light" onSubmit={handleSubmit}>

                    <h1 className="text-center">עדכון פרטיים אישיים </h1>
                    <h6  className=" text-right"> עדכון מספר טלפון</h6>
                    <input autocomplete="off" placeholder="מספר נייד" className="form-control text-right"onChange={(e)=>setphone(e.target.value)}   ></input>
                    <h6 className=" text-right">  שינוי סיסמה</h6>
                    <input type="password" placeholder="הכנס סיסמה חדשה" className="form-control text-right" ref={passwordRef} autocomplete="off" ></input>
                    <h6 className="text-right">אימות סיסמה</h6>
                    <input type="password" placeholder="אימות סיסמה" className="form-control text-right" ref={passwordConfirmRef} ></input>
                    <h6 className="text-right">שינוי אזור</h6>
                    
                    <input placeholder="אזור" className="form-control text-right" onChange={(e)=>setarea(e.target.value)} ></input>
                    <h6 className=" text-right">שינוי תמונת פרופיל</h6>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label ">בחר תמונה</label>
                    </div>

                    <Button type="submit" disabled={loading} variant="primary"  block  className="log-btn">שלח</Button>              
                </Form>
            </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
        </div>
    );
}
export default Profile;