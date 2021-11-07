import { React} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
import { useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext"
import {dbReq,dbUser} from '../firebase'
import Swal from 'sweetalert2';
import today from '../component/Date'
import { useHistory } from 'react-router-dom';
import { useState} from 'react'



 
var x="Date"

export const setDataReceivedFromChild=(index)=>{ 
    console.log(index);
    x=index
}


function Driver(name){
        
  
    //const [search,setSearch]=useState("Date");

    const { currentUser } = useAuth();
    const history = useHistory()
    const [filter,setilter]=useState("Date")



    console.log(x)
    




    useEffect(getdata)
    
    async function getdata () {//מביא מידע של כל הבקשות נסיעה
        let user=""
        await dbUser.doc(currentUser.uid).get().then((u)=>{
            user=u.data()
        })
        console.log(user)
        if(x==="exit")
            setilter(user.exit)

        await dbReq.orderBy(x).get().then((q) => {
            var req = [];
            q.forEach(doc=>{
                let x= doc.data()
                if(x.have_driver===false && x.Date >= today)//בודק שהנסיעה בתוקף וגם שאין עדיין נהג שאישר את הנסיעה
                    req.push(doc.data());
            });
            getDataUserAsk(req)//פונקציה שמביא את הפרטים של מי שביקש את הנסיעה
          })
        }

        async function getdataReelTime () {//מביא מידע של כל הבקשות נסיעה
            let user=""
            await dbUser.orderBy(x).doc(currentUser.uid).onSnapshot((u)=>{
                user=u.data()
            })
            console.log(user)
            if(x==="exit")
                setilter(user.exit)
    
            await dbReq.get().then((q) => {
                var req = [];
                q.forEach(doc=>{
                    let x= doc.data()
                    if(x.have_driver===false && x.Date >= today)//בודק שהנסיעה בתוקף וגם שאין עדיין נהג שאישר את הנסיעה
                        req.push(doc.data());
                });
                getDataUserAsk(req)//פונקציה שמביא את הפרטים של מי שביקש את הנסיעה
              })
            }


       async function getDataUserAsk(reqData){//מקבל מערך שך כל הבקשות נסיעה
                reqData.forEach(element =>{
                    var userAsk =[] 
                    var x=""
                    dbUser.doc( element.id_ask)//מוצי את המידע של מבקש הנסיעה
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
            const td8= document.createElement('td');
            const btn = document.createElement('input');
            const uImg = document.createElement("img");
            
                
                btn.type = "button";
                btn.className = "btn btn-primary text-right";
                btn.value = "אשר נסיעה";
                btn.onclick = (e) => {
                    RideApproval(userAsk,req );
                  };
            
            uImg.setAttribute('src',userAsk.imgUrl );
            uImg.className="img-fluid rounded-circle  img-responsive" 
            uImg.onclick =(e)=>{
                console.log("1  "+ userAsk.id)
                history.push({pathname:'/CardProfile', id: userAsk.id , flag:false  })
            }
                
            td3.innerHTML=req.destination;
            td3.className="text-right"
            td4.innerHTML=req.exit;
            td4.className="text-right"
            td5.innerHTML=req.time;
            td5.className="text-right"
            td6.innerHTML=req.Date;
            td6.className="text-right"
            td7.innerHTML=userAsk.first_name +" "+userAsk.last_name;
            td7.className="text-right"
            
            td1.appendChild(btn);
            td8.appendChild(uImg);
            tr.appendChild(td1);
            
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            
              
            tbody.appendChild(tr)
        }



            function RideApproval(user,req){
                if(currentUser.uid === req.id_ask)
                Swal.fire({
                    icon: 'error',
                    title: 'שגיאה',
                    text: 'אין אפשרות לאשר בקשה זאת',
                  })
                else
                {
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
                    window.open("http://wa.me/972"+user.phone_number+"/היי אני הנהג שלך")

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
                    <th width= "14%">אשר נסיעה</th>
                    <th width= "14%">יעד</th>
                    <th width= "14%">מוצא</th>
                    <th width= "14%">שעה</th>
                    <th width= "14%">תאריך</th>
                    <th width= "14%">שם המבקש</th>
                    <th width= "7%" ></th>
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