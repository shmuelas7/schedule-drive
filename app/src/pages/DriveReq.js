import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from "../component/Nav";
import { useAuth } from '../contexts/AuthContext';
import {dbReq} from '../firebase';
import swal from 'sweetalert2'
import { useState} from 'react';

function Req(){

const {currentUser} = useAuth();
const [date , setdate]= useState(Date);
const [exit , setexit]= useState("");
const [destination , setdestination]= useState("");
const [time,settime]= useState("");
const [comment,setComment]=useState("")

var today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
 today = mm + '/' + dd + '/' + yyyy;

 function validation(){
     if(date> today)
     return true
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

    if(validation)
    e.preventDefault();
    console.log(currentUser.uid);
    dbReq.doc(currentUser.uid).set({
        date:date,
        exit:exit,
        destination:destination,
        time:time,
        id_ask:currentUser.uid,
        id_driver:null,
        comment:comment
     })
     .then(() => {
         console.log("Document successfully written!");
         swal.fire("הבקשה נקלטה במערכת", "success")
     })
     .catch((error) => {
         console.error("Error writing document: ", error);
     });
    
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
                        <input type="date" placeholder="תאריך יציאה" className="form-control input-d" data-date-format="yyy/dd/mm" onChange={(e)=>setdate(e.target.value)} required></input>
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
                        
                        <div className="text-right">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox"  value="option1"/>
                                <label className="form-check-label" >כסא גלגלים</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox"  value="option2"/>
                                <label className="form-check-label" >מלווה</label>
                            </div>
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