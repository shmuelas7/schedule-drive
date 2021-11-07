import React from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext"
import today from '../component/Date'
import swal from 'sweetalert2'
import {dbReq} from '../firebase';
import {dbUser} from '../firebase';


function FutureDrive(){

    const { currentUser } = useAuth();
    


    useEffect(getdata)

    async function getdata () {//מוציא את פרטי הנסיעה של הנהג
       
       await dbReq.get()
            .then((q) => {
            var drive = [];
            q.forEach(doc=>{
                let x= doc.data()
                let count =0;
                console.log("ddd"+x.Date)
                if(x.Date > today)//בודק תאריך
                {
                    console.log("ask "+x.id_ask)
                    console.log("driver "+x.id_driver)
                    console.log("curnt "+currentUser.uid)
                    if(currentUser.uid === x.id_ask || currentUser.uid === x.id_driver)
                        drive.push(x);

                    console.log(count)

                }
                console.log(doc.data())

            });
            
                dataUsers(drive)
            })
        
    }

        async function dataUsers(drive){//מביא את המידע של הנהג ומבקש הנסיעה
            
        var tbody = document.getElementById('tbody1');
            tbody.innerHTML="";
        
         drive.forEach(element =>{
            var x="";
            var y=";"
            console.log(element.id_ask)
            dbUser.doc(element.id_ask)//מידע של מבקש הנסיעה
            .get().then((as)=>{
                    x =as.data()      
        })

        console.log(element.id_driver)
                if(element.driver!= null)
                dbUser.doc(element.id_driver)//מידע של הנהג
            .get().then((driv)=>{
                y = driv.data();
            })
            setTimeout(() => {

                add(element,x,y)},2500)
            })
        }
        function add(data,ask,driver){//מכניס מידע לטבלה

            console.log("check "+ask.age)
            var tbody = document.getElementById('tbody1');
            const tr= document.createElement('tr');
            const td1= document.createElement('td');
            const td2= document.createElement('td');
            const td3= document.createElement('td');
            const td4= document.createElement('td');
            const td5= document.createElement('td');
            const td6= document.createElement('td');
            const td7= document.createElement('td');
            const td8= document.createElement('td');
            const td9= document.createElement('td');
            const btn = document.createElement('input');
            
                
                btn.type = "button";
                btn.className = "btn btn-primary  text-center";
                btn.value = "בטל נסיעה";
                btn.onclick = (e) => {
                    cancelation(data,driver);
                  };
                
             if(driver.first_name !== undefined)   
             {
            td2.innerHTML=driver.first_name;
            
            td3.innerHTML=driver.phone_number;
            
             }
             else{
                td2.innerHTML="אין מתנדב עדיין";
            
                td3.innerHTML="אין מתנדב עדיין";

             }
             td2.className="text-right"
             td3.className="text-right"

            td4.innerHTML=ask.phone_number;
            td4.className="text-right"
            td5.innerHTML=data.destination;
            td5.className="text-right"
            td6.innerHTML=data.exit;
            td6.className="text-right"
            td7.innerHTML=data.time;
            td7.className="text-right"

            td8.innerHTML=data.Date;
            td8.className="text-right"

            td9.innerHTML=ask.first_name;
            td9.className="text-right"
            
            td1.appendChild(btn);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tbody.appendChild(tr)
        }
        function cancelation(req,driver){//מוחק נסיעה
                console.log("user "+currentUser.uid)
                console.log("driver "+driver.id)
            if(currentUser.uid === driver.id )//אם הנהג מבטל נסיעה הנסיעה חוזרת למאגר הנסיעות
            {
                console.log("return tata base")
            dbReq.doc(req.id_req).update({
                id_driver:null,
                have_driver:false
              })
            }
              
            else//אם המבקש נסיעה מבטל את הנסיעה הנסיעה מיטבטלת
               {
                dbReq.doc(req.id_req).delete()
                console.log("del")
               }
                
            swal.fire('הנסיעה בוטלה')
        }
 
        
              

    return(
        <div className="container-fluid">
            
            <Nav/>

            <div className="bg-warning">
                <h1 className="text-center">הנסיעות שלי</h1>
                <Search/>
                <Table striped bordered hover variant="dark" responsive>
                <thead className="text-right">
                    <tr>
                        <th>עריכת נסיעה</th>
                        <th>שם המתנדב</th>
                        <th>טלפון מתנדב</th>
                        <th>טלפון נוסע</th>
                        <th>יעד</th>
                        <th>מוצא</th>
                        <th>שעה</th>
                        <th>תאריך</th>
                        <th>שם המבקש</th>
                    </tr>
                </thead>
                <tbody id="tbody1">
                </tbody>
            </Table>
            </div>
        </div>


    )
}

export default FutureDrive;