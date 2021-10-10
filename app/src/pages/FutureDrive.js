import React from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"

  

function FutureDrive(){

    const { currentUser } = useAuth();
    var ask="";
    var driver="";

    useEffect(getdata)

    async function getdata () {
        var tbody = document.getElementById('tbody1');
        const data =   firebase.firestore().collection('request')
        data.where('id_driver','!=', null )
        .where('id_driver', '==', currentUser.uid )
        //.where('date','>',Date.now())
        .get().then((q) => {
            var drive = [];
            q.forEach(doc=>{
                drive.push(doc.data());
                console.log(doc.data())

            });
           setTimeout(addToTable(drive),500000)
        })
    }

        async function addToTable(drive){
            
        var tbody = document.getElementById('tbody1');
            tbody.innerHTML="";
        
        await drive.forEach(element =>{
            var x="";
            var y=";"
            console.log(element.id_ask)
           firebase.firestore().collection('users').doc(element.id_ask)
            .get().then((as)=>{
                    x =as.data()
                    getuser1(x)
        })
        console.log(element.id_driver)
             firebase.firestore().collection('users').doc(element.id_driver)
            .get().then((driv)=>{
                y = driv.data();
                getuser2(y)
            })
            add(element)
            })
        }
        function add(data){
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

            const btn = document.createElement('input');
                
                btn.type = "button";
                btn.className = "btn btn-primary  text-center";
                btn.value = "בטל נסיעה";
                //btn.onclick = RideApproval;
                
            td2.innerHTML=driver.first_name;
            td3.innerHTML=data.dest;
            td4.innerHTML=data.exit;
            td5.innerHTML=data.time;
            td6.innerHTML=data.date;
           // td7.innerHTML=name;
            
            td1.appendChild(btn);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);

            
              
              
            tbody.appendChild(tr)
        }
        function getuser1(x){
            ask=x;
            console.log(ask.first_name)
        }

        function getuser2(x){
            driver=x;
            console.log(driver.first_name)
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