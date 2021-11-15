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
import { useHistory } from 'react-router-dom';



function FutureDrive(){

    const { currentUser } = useAuth();
    const history = useHistory()
    


    useEffect(getdata)

    async function getdata () {//מוציא את פרטי הנסיעה של הנהג
       
       await dbReq.orderBy('Date').get()
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
        
        await drive.forEach(element =>{
            var x="";
            var y="";
            console.log(element.id_ask)
            dbUser.doc(element.id_ask)//מידע של מבקש הנסיעה
            .get().then((as)=>{
                    x =as.data()      
        })

        console.log("dr  "+element.id_driver)
            if( element.have_driver)
                dbUser.doc(element.id_driver)//מידע של הנהג
                .get().then((driv)=>{
                y = driv.data();
            })
            setTimeout(() => {
                console.log("y"+y)
                console.log("x"+x)
                add(element,x,y)},2500)
            })
        }
        function add(data,ask,driver){//מכניס מידע לטבלה

            console.log("check "+ask.age)
            console.log("id1 "+driver.first_name)
            console.log("id0 "+driver.id)
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
            const td10 =document.createElement('td');
            const btn3 = document.createElement('input')
            const btn = document.createElement('input');
            

            btn3.type="button"
            btn3.className="btn btn-primary  text-center"
            btn3.value="פרטים נוספים על נסיעה"
            btn3.onclick=(e)=>{
                swal.fire({
                    icon: 'info',
                    title: 'פרטים',
                    text: data.comment,
                    confirmButtonText: 'אישור',
                  })

            }
                
                btn.type = "button";
                btn.className = "btn btn-primary  text-right";
                btn.value = "בטל נסיעה";
                btn.onclick = (e) => {
                    cancelation(data,driver,ask);
                  };
            
                  console.log("have driber"+ driver.first_name)
             if(data.have_driver)   
             {
                if(currentUser.uid === data.id_ask )
                {
                    const btn2= document.createElement('input');
                    btn2.type = "button";
                    btn2.value = driver.first_name;
                    btn2.className = "btn btn-success text-right";
                    btn2.onclick = (e) => {
                        history.push({pathname:'/CardProfile', id: data.id_driver , flag:false  })
                      };
                    td2.appendChild(btn2);
                }
                else{
                    td2.innerHTML=driver.first_name;
                    td2.className="text-right"
                }
            
                td3.innerHTML=driver.phone_number;
             }
             else{
                td2.innerHTML="אין מתנדב עדיין";
                td2.className="text-right"
            
                td3.innerHTML="אין מתנדב עדיין";

             }

             
             
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
            td10.appendChild(btn3)
            tr.appendChild(td1);
            tr.appendChild(td10)
            tr.appendChild(td3);
            tr.appendChild(td2);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tbody.appendChild(tr)
            
        }
        function cancelation(req,driver,ask){//מוחק נסיעה
                console.log("user "+currentUser.uid)
                console.log("driver "+driver.id)
            if(currentUser.uid === req.id_driver )//אם הנהג מבטל נסיעה הנסיעה חוזרת למאגר הנסיעות
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
                
               swal.fire({
                title:' הנסיעה בוטלה ',
                icon:'success',
                confirmButtonText: 'אישור',
            }).then((result) => {
                if (result.isConfirmed) {
                    if(req.have_driver===true)
                        if(currentUser.uid === req.id_driver ){
                            let phone = ask.phone_number.substring(1);
                            console.log("phone "+phone)
                             window.open("http://wa.me/972"+phone+"?text=הנסיעה בוטלה")
                        }
                        else{
                            let phone = driver.phone_number.substring(1);
                            console.log("phone "+phone)
                             window.open("http://wa.me/972"+phone+"?text=הנסיעה בוטלה")
                        }

                    window.location.reload();
                }
            })
        }
 
        
              

    return(
        <div>
            
            <Nav/>

            <div className="bg-warning">
                <h1 className="text-center">הנסיעות שלי</h1>
                <Search/>
                <Table striped bordered hover variant="dark" responsive>
                <thead className="text-right">
                    <tr>
                        <th>עריכת נסיעה</th>
                        <th>פרטים</th>
                        <th>טלפון מתנדב</th>
                        <th>שם המתנדב</th>
                        
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