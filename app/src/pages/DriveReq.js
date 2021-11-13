import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from "../component/Nav";
import { useAuth } from '../contexts/AuthContext';
import {dbReq} from '../firebase';
import swal from 'sweetalert2'
import { useState} from 'react';
import { uuid } from 'uuidv4';
import {  useHistory } from "react-router-dom"
import today from '../component/Date'



function Req(){

const {currentUser} = useAuth();
const [date , setdate]= useState(Date);
const [exit , setexit]= useState("");
const [destination , setdestination]= useState("");
const [time,settime]= useState("");
const [comment,setComment]=useState("אין פרטים")
const history = useHistory();


 function validation(){
     if(date > today)
     {
        console.log("date ok")
        return true
        
     }
        else
        {
            swal.fire({
                icon: 'error',
                title: 'שגיאה',
                text: 'תאריך לא תקין ',
                confirmButtonText: 'בסדר',
              })
            return  false
        } 
 }


function handleSubmit(e) {
    e.preventDefault();
    console.log(date)
    console.log(today)
    if(validation())
    {
    console.log(currentUser.uid);
    const id = uuid();
    console.log(id)
    dbReq.doc(id).set({
        Date:date,
        exit:exit,
        destination:destination,
        time:time,
        id_ask:currentUser.uid,
        id_driver:null,
        comment:comment,
        have_driver:false,
        id_req:id
     })
     .then((x) => {

         console.log(id)
         console.log("Document successfully written!");
         swal.fire({
            title:'הבקשה נקלטה במערכת',
            showDenyButton: true,
            confirmButtonText: 'בקשה נוספת',
            denyButtonText: `העבר אותי לנסיעות שלי`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.reload();
            } else if (result.isDenied) {
              history.push("/FutureDrive")
            }
          })
     })
     .catch((error) => {
         console.error("Error writing document: ", error);
     });
     }
    
}
    return(
        <div className="container-fluid">
            <Nav/>
            <div className="row bg-warning">
                <div className="col-md-2 col-sm-4 col-xs-12 "></div>  
                <div className="col-md-8 col-sm-4 col-xs-12 ">
                    <form className=" border border-dark rounded mt-2 mb-2 bg-light"  onSubmit={handleSubmit} >
                        <h1 className="text-center">בקשת נסיעה</h1>
                        <h6 className="text-right">הכנס תאריך</h6>
                        <input type="date"  className="form-control " data-date-format="DD MMMM YYYY" placeholder="dd-mm-yyyy" onChange={(e)=>setdate(e.target.value)} required></input>
                        <h6 className="text-right">מוצא</h6>
                        <input placeholder="מוצא" className="form-control text-right" onChange={(e)=>setexit(e.target.value)} required ></input>
                        <h6 className="text-right">יעד</h6>
                        <input placeholder="יעד" className="form-control text-right" onChange={(e)=>setdestination(e.target.value)} required ></input>
                        <h6 className="text-right">שעה</h6>
                        <input  type="time" placeholder="שעה" className="form-control" onChange={(e)=>settime(e.target.value)} required ></input>
                        <div className="text-right">
                            <h6>הערות</h6>
                            <textarea className="form-control" rows="2" onChange={(e)=>setComment(e.target.value)}></textarea>
                        </div>
                        
                        <Button type="submit" variant="primary"  block className="log-btn mb-2">שלח</Button>
                    </form>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12"></div>  
            </div>
        </div>
    );
}

export default Req;