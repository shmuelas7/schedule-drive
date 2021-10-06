import React from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';

  

function FutureDrive(){

    var tbody = document.getElementById('tbody1');

    useEffect(getdata)
    async function getdata () {
        const data = firebase.firestore().collection('myDrive')
        
        

        await data.get().then((q) => {
            var drive = [];
            q.forEach(doc=>{
                drive.push(doc.data());

            });
            addToTable(drive)
            
          })

  

        }
        function addToTable(drive){
            //tbody.innerHTML="";
            var info='';
        drive.forEach(element =>{
            })
        }
              

    return(
        <div className="container-fluid">
            
            <Nav/>

            <div className="bg-warning">
                <h1 className="text-center">הנסיעות שלי</h1>
                <Search/>
                <Table striped bordered hover variant="dark">
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
                <tbody>
                </tbody>
            </Table>
            </div>
        </div>


    )
}

export default FutureDrive;