import {createElement, React, useState} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';





  

function Driver(){


    const tbody = document.getElementById('tbody1');
   // const [user,setUser]=useState(null)


    useEffect(getdata)
    async function getdata () {
        const data = firebase.firestore().collection('request')
        

        await data.get().then((q) => {
            var req = [];
            var users=[];
            q.forEach(doc=>{
                req.push(doc.data());



            });
             req.forEach(element =>{
                const user= firebase.firestore().collection('users').doc(element.id);
                console.log( +user.id);
                addAllItems(req,user)
            });
            





          })

          function additems(phone){
            const tr= document.createElement('tr');
            const td1= document.createElement('td');
            const td2= document.createElement('td');

            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn btn-primary  text-center";
            btn.value = "אשר נסיעה";
           // btn.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
            td1.appendChild(btn);
            td2.innerHTML=phone;
            tr.appendChild(td2);
              
              tr.appendChild(td1);
              tbody.appendChild(tr)
          }
          function addAllItems(reqList,user){
              tbody.innerHTML="עע";
              user.forEach(ditels=>{
                additems(ditels.phone_number)
              })
            //   reqList.forEach(element =>{
            //       additems(element.exit)
            //   })
          }



 
          

        //   for(const row of data) {
        //       const tr = document.createElement("tr");

        //       for(const cell of row){
        //           const td = document.createElement("td");
        //           td.textContent = cell;
        //           tr.appendChild(td);
        //       };
              
        //       tblBody.appendChild(tr);
        //   };
          


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