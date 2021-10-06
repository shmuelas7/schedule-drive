import { React} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';





  

function Driver(){


    const tbody = document.getElementById('tbody1');




    useEffect(getdata)
    async function getdata () {
        const data = firebase.firestore().collection('request')
        var tbody=document.getElementById("tbody1")
        

        await data.get().then((q) => {
            var req = [];
            q.forEach(doc=>{
                req.push(doc.data());

            });
            addAllItems(req)
            
          })

          function additems(phone,dest,exit,time,date,name){
            const tr= document.createElement('tr');
            const td1= document.createElement('td');
            const td2= document.createElement('td');
            const td3= document.createElement('td');
            const td4= document.createElement('td');
            const td5= document.createElement('td');
            const td6= document.createElement('td');
            const td7= document.createElement('td');

            var btn = document.createElement('input');
                btn.type = "button";
                btn.className = "btn btn-primary  text-center";
                btn.value = "אשר נסיעה";
               // btn.onclick = RideApproval(phone,dest,exit,time,date,name);
            td1.appendChild(btn);
            td2.innerHTML=phone;
            td3.innerHTML=dest;
            td4.innerHTML=exit;
            td5.innerHTML=time;
            td6.innerHTML=date;
            td7.innerHTML=name;
            tr.appendChild(td1);
            tr.appendChild(td2);
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
                    console.log(info)
                    getuser(info,element)
                } )
                 console.log("var"+info)

              
          })
 
        }
        function getuser(user,req){
            let phone =user.phone_number
            let dest = req.destination
            let exit = req.exit
            let time = req.time
            let date =req.date
            let name = user.first_name +" "+user.last_name
            additems(phone,dest,exit,time,date,name)
        }

        function RideApproval(phone,dest,exit,time,date,name){
             const Confirmation = firebase.firestore().collection("myDrive");
             Confirmation.doc().set({
                name:name,
                phone:phone,
                dest:dest,
                ext:exit,
                time:time,
                data:data
              })

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
                    <th>מספר טלפון</th>
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