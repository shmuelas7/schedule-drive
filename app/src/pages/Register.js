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
import swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import app from '../firebase';


 function Register(){

        const emailRef = useRef();
        const passwordRef = useRef();
        const passwordConfirmRef = useRef();
        const { signup } = useAuth();
        const [error, setError] = useState("");
        const [loading] = useState(false);
        const history = useHistory();
        const [firstname,setfirstname]=useState("");
        const [lasttname,setlastname]=useState("");
        const [phone,setphone]=useState("");
        const [area,setarea]=useState("");
        const [age,setage]=useState(0);
        const [imgUrl,setImgUrl]=useState(null)

        var x="";

        const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        const regexletters = /^[\u05D0-\u05EA]+$/i;
        const regexphone = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;



        

        function validation(){// בודק שכל הנתונים שהוכנסו נכונים
            if(!regexEmail.test(emailRef.current.value))
            {
                swal.fire({
                    icon: 'error',
                    title: 'שגיאה',
                    text: 'מייל לא תקין ',
                    confirmButtonText: 'בסדר',
                  })
                console.log("false email");
                return false;
            }
            if(!regexletters.test(firstname) || !regexletters.test(lasttname))
            {
                swal.fire({
                    icon: 'error',
                    title: 'שגיאה',
                    text: 'שם פרטי או שם משפחה לא תקין ',
                    footer: 'אפשר לכתוב רק בעברית',
                    confirmButtonText: 'בסדר',
                  })
                return false;
            }
            if(age<10 || age> 120)
            {
                swal.fire({
                    icon: 'error',
                    title: 'שגיאה',
                    text: 'גיל לא תקין',
                    footer: 'גיל תקין 10-120',
                    confirmButtonText: 'בסדר',
                  })
                console.log("age false");
                return false;
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
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                swal.fire({
                    icon: 'error',
                    title: 'שגיאה',
                    text: 'סיסמאות לא תואמות',
                    confirmButtonText: 'בסדר',
                  })
                console.log("pass false");
                return false;
            }
                

            return true;
        }

        async function log(){//יוצר משתמש חדש
          try {
            //setLoading(true);
           await signup(emailRef.current.value, passwordRef.current.value).then(cred=>{ x=cred.user.uid;
                            console.log("login id " + x)});
    
          } catch {
            setError("לא הצליח ליצור חשבון");
          }
         // setLoading(false);
    
       }


     async function adddata(){//מכניס את המידע של המשתמש לפיירבייס
 
        console.log(x);
        console.log("set"+imgUrl)
         await db.doc(x).set({
         first_name:firstname,
        last_name:lasttname,
        phone_number:phone,
        area:area,
        age:age,
        id:x,
        imgUrl:imgUrl
      })
      .then(() => {
          console.log("Document successfully written!");
          swal.fire("נרשמת בהצלחה", "success")
          
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
    
    console.log(firebase.auth().currentUser.uid);

    }

     async function addImg(e){// קולט את התמונה מהמשתמש
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
      
       async function handleSubmit(e) {
          e.preventDefault();
          if(validation()){
            //log().then(()=>setTimeout(adddata(),3000))
           await log()
           await adddata()
            history.push("/");
          }
          
          
        }


    return(
        <div className=" bg-primary">

            <div className="row" dir="rtl">
                <div className="col-md-3 col-sm-12 col-xs-12"></div>
                
                
                <div className="col-md-6 col-sm-12 col-xs-12" >
                    {error && <Alert variant="danger">{error}</Alert>}  
                    <form className=" bg-light rounded  border border-dark mb-2  mt-2"  onSubmit={handleSubmit}>
                    <img src={logo} alt="logo" className="rg-logo"/>
                    <h1 className="text-center">טופס הרשמה</h1>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                             <h5 className=" text-right">שם פרטי</h5>
                            <input placeholder="שם פרטי*" className="form-control text-right" name="firstName" type="text" onChange={(e)=>setfirstname(e.target.value)} required></input>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <h5 className=" text-right" >שם משפחה</h5>
                            <input placeholder="שם משפחה*" className="form-control text-right" name="lastName" required onChange={(e)=>setlastname(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <h5 className=" text-right">גיל</h5>
                            <input type="number" placeholder="גיל" className="form-control text-right" required  name="age" onChange={(e)=>setage(e.target.value)}></input>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <h5  className=" text-right">טלפון</h5>
                            <input placeholder="מספר נייד*" className="form-control text-right" required onChange={(e)=>setphone(e.target.value)}></input>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <h5 className=" text-right" >אזור</h5>
                            <input placeholder="בחר אזור*" className="form-control text-right" id="area" required onChange={(e)=>setarea(e.target.value)} ></input>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <h5 className=" text-right">מייל</h5>
                            <input placeholder="מייל*" className="form-control text-right" required  ref={emailRef}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <h5 className=" text-right">  סיסמה</h5>
                            <input type="password" placeholder="סיסמה*" className="form-control text-right" required  name="password" ref={passwordRef} autoComplete="off"></input>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <h5 className=" text-right">אימות סיסמה</h5>
                            <input type="password" placeholder="אישור סיסמה*" className="form-control text-right" required name="password" ref={passwordConfirmRef} autoComplete="off"></input>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 "></div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">

                            <h5 className=" text-right">הוספת תמונת פרופיל</h5>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="file" onChange={addImg}/>
                                <label className="custom-file-label " dir="rtl">בחר תמונה</label>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="form-check form-check-inline col-lg-2">
                            
                            <input className="form-check-input ml-2" type="checkbox"  required/>
                            <Link to="Terms" >
                                <label>אשר תנאים</label>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        
                        <Button type="submit" disabled={loading}  variant="success"  block  className="log-btn mx-5 mb-2 btn-lg">שלח</Button>         
                    </div>
                    
                </form> 
                </div>              
            </div>           
        </div>
        
    );
}

 export default Register;