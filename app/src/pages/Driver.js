import { React} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"
import { Button } from 'react-bootstrap';
import {dbReq} from '../firebase'
import Swal from 'sweetalert2';





  

function Driver(){


    
    const { currentUser } = useAuth();
    var dest ="";
    var exit = "";
    var time ="";
    var date ="";
    var name ="";
    var id ="";
    var phone_ask="";



    useEffect(getdata)
    
    

    async function getdata () {
        
        
        const data = firebase.firestore().collection('request')

        await data.get().then((q) => {
            var req = [];
            q.forEach(doc=>{
                req.push(doc.data());

            });
            addAllItems(req)
            
          })
        }

          function additems(){
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
                btn.onclick = RideApproval;
                
            
            td3.innerHTML=dest;
            td3.className="text-right"
            td4.innerHTML=exit;
            td4.className="text-right"
            td5.innerHTML=time;
            td5.className="text-right"
            td6.innerHTML=date;
            td6.className="text-right"
            td7.innerHTML=name;
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
            function RideApproval(){
                
             dbReq.doc(id).update({
                id_driver:currentUser.uid
              })
              Swal.fire(
                '  תודה שהתנדבתה להסיע את ' +name,
                ' מספר טלפון ליצירת קשר '+ phone_ask,
                
                'success'
              )
              console.log("sucsses")
            }

            function addAllItems(reqData){
            var tbody = document.getElementById('tbody1');
            tbody.innerHTML="";
                var info='';
                reqData.forEach(element =>{

                    firebase.firestore().collection('users').doc( element.id_ask)
                    .get()
                    .then((value)=> {
                        info=value.data()
                        getuser(info,element)
                    } )
                })
 
            }
        
        function getuser(user,req){
             dest = req.destination
             exit = req.exit
             time = req.time
             date =req.date
             name = user.first_name +" "+user.last_name
             id = user.id
             phone_ask = user.phone_number;
            additems()
          }




          


    return(
        <div className="container-fluid">
            <Nav/>
            
            <div className="bg-warning">
            <h1 className="text-center">כל הנסיעות</h1>
            <Search/>
            <Table striped bordered hover variant="dark" id="drive">
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