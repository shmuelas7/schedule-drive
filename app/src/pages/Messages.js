import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/manager.css'
import logo from "../style/black logo.png"
import { useEffect } from 'react';
import {dbContact} from '../firebase'
import Button  from 'react-bootstrap/Button';
import '../style/Messages.css';
import swal from 'sweetalert2'


function Manager(){

    useEffect(getData)
     
    
   async function getData(){
         var messege = []
       await dbContact.get().then((doc)=>{
            doc.forEach(mes=>{
                messege.push(mes.data())
                
                console.log(mes.data())
            })
        })

        console.log(messege.name)
        console.log("ok")
        createCard(messege)
    }
   
    function createCard(mess){
        
        var card = document.querySelector(".container-cardd")
        mess.forEach(elment=>{

            var div=document.createElement('div');
            div.className='card mb-3';

            var div2=document.createElement('div')
            div2.className="card-block"

            var h4  =document.createElement('h4')
            h4.className="card-title"
            h4.innerHTML=elment.subject

            var p1  =document.createElement('p')
            p1.className="card-text"
            p1.innerHTML=elment.messege

            var p2  =document.createElement('p')
            p2.className="card-text text-right"
            p2.innerHTML='שם השולח:'+elment.name

            var btn1= document.createElement('input')
            btn1.type="button"
            btn1.className="w-35 btn btn-danger"
            btn1.value="טופל"
            btn1.onclick = (e) => {
                finish(elment.id)
              };
              var btn2= document.createElement('input')
              btn2.type="button"
              btn2.className="w-35 btn btn-info ml-5"
              btn2.value="תגובה"
              btn2.onclick = (e) => {
                  hendel(elment.mail)
                };
            
            div2.appendChild(h4)
            div2.appendChild(p1)
            div2.appendChild(p2)
            div2.appendChild(btn1)
            div2.appendChild(btn2)
            div.appendChild(div2)
            card.appendChild(div)



        })
        function finish(id){
            console.log("finis")
            swal.fire({
                title:' מחיקת אירוע',
                text:   '  אם סיימתה לטפל ? לחץ על מחק אחרת לחץ על ביטול',
                icon:'success',
                confirmButtonText: 'מחק',
                showDenyButton: true,
                denyButtonText: 'בטל פעולה',
                }).then((result) => {
                if (result.isConfirmed) {
                    dbContact.doc(id).delete()
            
                    console.log("del")
                    window.location.reload();
                }
              })

        }

        function hendel(email){
            window.open('mailto:'+email);
        }
    }


    return(
    <div className="p-3  bg-info">
        <div className=" text-center">
            <img src={logo} alt="logo" className="logo mb-5"/>
            <h1>הודעות נכנסות </h1>
         </div>
         <div className="container-cardd">

        </div>
    </div>
         

    )
}

export default Manager;