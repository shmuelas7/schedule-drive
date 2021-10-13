import React from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"
  

function PreviousDrive(){
    const { currentUser } = useAuth();

    useEffect(getdata)

    async function getdata () {
        const data =   firebase.firestore().collection('request')
        data.where('id_driver','!=', null )
        .where('id_driver', '==', currentUser.uid )
        .get().then((q) => {
            var drive = [];
            q.forEach(doc=>{
                let x= doc.data()
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;
                console.log(x)
                console.log(today)
                console.log(x.date)
                if(x.date < today)
                {
                    console.log(today)
                    drive.push(doc.data());
                }
                console.log(doc.data())

            });
            
                addToTable(drive)
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
                    
        })
        console.log(element.id_driver)
             firebase.firestore().collection('users').doc(element.id_driver)
            .get().then((driv)=>{
                y = driv.data();
                
            })
            setTimeout(() => {
                add(element,x,y)}, 2000)
            })
        }
        function add(data,ask,driver){
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
                btn.value = "דרג";
                //btn.onclick = RideApproval;
                



            td2.innerHTML=data.destination;
            td2.className="text-right"

            td3.innerHTML=data.exit;
            td3.className="text-right"

            td4.innerHTML=data.time;
            td4.className="text-right"

            td5.innerHTML=data.date;
            td5.className="text-right"

            td6.innerHTML=ask.first_name;
            td6.className="text-right"

            td7.innerHTML=driver.first_name;
            td7.className="text-right"
            
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

    return(
        <div className="container-fluid " >
            <div className=" bg-warning">
            <Nav/>
            <h1 className="text-center">היסטורית נסיעות</h1>
            <Search/>
            <Table striped bordered hover variant="dark">
                <thead className="text-right">
                    <tr>
                    <th>דירוג נהג / נוסע</th>
                    <th>יעד</th>
                    <th>מוצא</th>
                    <th>שעה</th>
                    <th>תאריך</th>
                    <th>שם המבקש</th>
                    <th>שם הנהג</th>
                    </tr>
                </thead>
                <tbody id="tbody1">
                </tbody>
            </Table>
            </div>
        </div>


    )
}
export default PreviousDrive;