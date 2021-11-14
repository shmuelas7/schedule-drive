import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/manager.css'
import logo from "../style/black logo.png"
import { useEffect } from 'react';
import {dbContact} from '../firebase'
import Button  from 'react-bootstrap/Button';
import '../style/Messages.css';


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
            let code=`      
            <div class="card">
            <div class="card-block">
                <h4 class="card-title">${elment.subject}</h4>
                    <p class="card-text">${elment.messege}</p>
                    <p class "card-text text-left>${'שם השולח:'+elment.name}</p>
                    <Button  class="w-100 btn btn-primary" type="submit">טופל</Button>
            </div>
        </div>`;
        card.innerHTML += code

        })

    
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