import { React} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"
import {dbReq} from '../firebase'
import Swal from 'sweetalert2';

function Driver(){

    const { currentUser } = useAuth();


    var today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    useEffect(getdata)
    
    async function getdata () {//מביא מידע של כל הבקשות נסיעה
            
        const data = firebase.firestore().collection('request')

        await data.get().then((q) => {
            var req = [];
            q.forEach(doc=>{
                let x= doc.data()
                if(x.have_driver===false && x.date >= today)//בודק שהנסיעה בתוקף וגם שאין עדיין נהג שאישר את הנסיעה
                    req.push(doc.data());

            });
            getDataUserAsk(req)//פונקציה שמביא את הפרטים של מי שביקש את הנסיעה
            
          })
        }
       async function getDataUserAsk(reqData){//מקבל מערך שך כל הבקשות נסיעה
                reqData.forEach(element =>{
                    var userAsk =[] 
                    var x=""
                    firebase.firestore().collection('users').doc( element.id_ask)//מוצי את המידע של מבקש הנסיעה
                    .get()
                    .then((value)=> {
                        userAsk.push(value.data())//שומר את המידע של מבקש הנסיעה
                        x=value.data()
                       additems(x,element)//שולח את המידע של הקשת נסיעה וגם של מי שביקש את הנסיעה
                    } )

                })
            }
            

          function additems(userAsk,req){// מכניס נתוניתם לטבלה
            var tbody = document.getElementById('tbody1');
            const tr= document.createElement('tr');
            const td1= document.createElement('td');
            const td3= document.createElement('td');
            const td4= document.createElement('td');
            const td5= document.createElement('td');
            const td6= document.createElement('td');
            const td7= document.createElement('td');
            const btn = document.createElement('input');
                
                btn.type = "button";
                btn.className = "btn btn-primary text-right";
                btn.value = "אשר נסיעה";
                btn.onclick = (e) => {
                    RideApproval(userAsk,req );
                  };
                
            td3.innerHTML=req.destination;
            td3.className="text-right"
            td4.innerHTML=req.exit;
            td4.className="text-right"
            td5.innerHTML=req.time;
            td5.className="text-right"
            td6.innerHTML=req.date;
            td6.className="text-right"
            td7.innerHTML=userAsk.first_name +" "+userAsk.last_name;
            td7.className="text-right"
            
            td1.appendChild(btn);
            tr.appendChild(td1);
            
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
              
            tbody.appendChild(tr)
        }



            function RideApproval(user,req){
                if(currentUser.uid === req.id_ask)
                    console.log("eror")
                else
                {
                console.log(req.id_req)
             dbReq.doc(req.id_req).update({
                id_driver:currentUser.uid,
                have_driver:true
              })
              Swal.fire({
                title:'  תודה שהתנדבת להסיע את ' + user.first_name,
                text:   ' מספר טלפון ליצירת קשר '+user.phone_number,
                icon:'success',
                confirmButtonText: 'ליצירת קשר',
                showDenyButton: true,
                denyButtonText: 'בטל נסיעה',
                }).then((result) => {
                if (result.isConfirmed) {
                    window.open("http://wa.me/"+user.phone_number+"/היי אני הנהג שלך")

                } else if (result.isDenied) {
                  Swal.fire('הנסיעה בוטלה', '', 'info')
                   dbReq.doc(req.id_req).update({
                     id_driver:null,
                    have_driver:false
                   })
                }
              })
              console.log("sucsses")
            }

            
            }


        


    return(
        <div className="container-fluid">
            <Nav/>
            
            <div className="bg-warning">
            <h1 className="text-center">כל הנסיעות</h1>
            <Search/>
            <Table striped bordered hover variant="dark" id="drive" responsive>
                <thead className="text-right">
                <tr>
                    <th>אשר נסיעה</th>
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

export default Driver;