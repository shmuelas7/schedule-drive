import { React} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"
import { Button } from 'react-bootstrap';
import {Confirmation} from "../firebase"





  

function Driver(){


    var tbody = document.getElementById('tbody1');
    const { currentUser } = useAuth();
    var phone="";
    var dest =""
    var exit = ""
    var time =""
    var date =""
    var name =""
    var id =""




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

          function additems(){
            const tr= document.createElement('tr');
            const td1= document.createElement('td');
            const td3= document.createElement('td');
            const td4= document.createElement('td');
            const td5= document.createElement('td');
            const td6= document.createElement('td');
            const td7= document.createElement('td');

            const btn = document.createElement('input');
                
                btn.type = "button";
                btn.className = "btn btn-primary  text-center";
                btn.value = "אשר נסיעה";
                btn.onclick = RideApproval;
                
            
            td3.innerHTML=dest;
            td4.innerHTML=exit;
            td5.innerHTML=time;
            td6.innerHTML=date;
            td7.innerHTML=name;
            
            td1.appendChild(btn);
            tr.appendChild(td1);
            
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);

            
              
              
              tbody.appendChild(tr)
          }
            function addAllItems(reqData){
            tbody.innerHTML="";
                var info='';
            reqData.forEach(element =>{

                 firebase.firestore().collection('users').doc( element.id)
                .get()
                .then((value)=> {
                    info=value.data()
                    getuser(info,element)
                } )
          })
 
        }
        
        function getuser(user,req){
             phone =user.phone_number
             dest = req.destination
             exit = req.exit
             time = req.time
             date =req.date
             name = user.first_name +" "+user.last_name
             id = user.id
             console.log(currentUser.phone_number)
            additems()
        }

         function RideApproval(){
                
             Confirmation.doc().set({
                name_ask:name,
                name_driver:currentUser.first_name +" "+currentUser.last_name,
                id_driver:currentUser.uid,
                id_ask:id,
                phone_ask:phone,
                //phone_driver:currentUser.phone_number,
                 dest:dest,
                 ext:exit,
                 time:time,
                 data:date

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