import React, { useRef, useState } from "react"
import Button from 'react-bootstrap/Button'
import { Form, Alert } from "react-bootstrap"
import Nav from "../component/Nav"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import firebase from 'firebase'
import app from '../firebase';
import swal from 'sweetalert2'

function Profile(){

    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { updatePassword,currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [area,setarea]=useState("")
    const [phone,setphone]=useState("")
    const [imgUrl,setImgUrl]=useState("")

    const db = firebase.firestore().collection("user")
    const regexphone = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;

   


    async function handleSubmit(e) {
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
   

        if(!regexphone.test(phone))
        {
            swal.fire({
                icon: 'error',
                title: 'שגיאה',
                text: 'טלפון לא תקין',
                confirmButtonText: 'בסדר',
              })
            console.log("phone false");
            return false;
        }

      console.log(currentUser.uid)
      db.doc(currentUser.uid).update({
        phone:phone,
        area:area,
        imgUrl:imgUrl
    })

    swal.fire({
      icon: 'sucsses',
      title: 'אישור',
      text: 'העידכון בוצעה בהצלחה',
      confirmButtonText: 'בסדר',
    })
    }

    async function addImg(e){
      const file = e.target.files[0]
      const storagRef =app.storage().ref()
      const fileRef = storagRef.child(file.name)
     await fileRef.put(file).then(()=>{
          console.log("uploaded img")
      })
     const url= await fileRef.getDownloadURL()
       setImgUrl(url)
      console.log("ac" +url)
  }
  function movePage(){
    history.push({pathname:'/CardProfile', id: currentUser.uid , flag:false  })
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
                    <input autoComplete="off" placeholder="מספר נייד" className="form-control text-right" onChange={(e)=>setphone(e.target.value)}   ></input>
                    <h6 className=" text-right">  שינוי סיסמה</h6>
                    <input type="password" placeholder="הכנס סיסמה חדשה" className="form-control text-right" ref={passwordRef} autoComplete ="off" ></input>
                    <h6 className="text-right">אימות סיסמה</h6>
                    <input type="password" placeholder="אימות סיסמה" className="form-control text-right" ref={passwordConfirmRef} autoComplete="off" ></input>
                    <h6 className="text-right">שינוי אזור</h6>
                    
                    <input placeholder="אזור" className="form-control text-right" onChange={(e)=>setarea(e.target.value)} ></input>
                    <h6 className=" text-right">שינוי תמונת פרופיל</h6>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" onChange={addImg}/>
                        <label className="custom-file-label ">בחר תמונה</label>
                    </div>
                    <div className="text-right mt-2">
                    <Button onClick={movePage} variant="success">מעבר לדף תגובות</Button> 
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