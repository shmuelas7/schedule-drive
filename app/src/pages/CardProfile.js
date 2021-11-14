import {React} from 'react';
import Nav from "../component/Nav";
import '../style/CardProfile.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {dbUser,dbComment} from '../firebase'
import Button  from 'react-bootstrap/Button';
import { useAuth } from "../contexts/AuthContext"
import { useState} from 'react';
import { uuid } from 'uuidv4';
import "firebase/firestore";

function CardProfile(){
    const history = useHistory()
    const { currentUser } = useAuth();
    
    const [comment,setComment]=useState("")

    
    
    
    const data = history.location.id
    const flag =history.location.flag

    
    console.log("info" + data)
    console.log("flag " + flag)

    useEffect(getdata)
    //getdata()
    
    var User =""
    var commentArry=[]
    

    async function getdata(){
        
       await dbUser.doc(data).get().then((value)=> {
            User = value.data()
        })
        
        await dbComment.where('id','==',data).get().then((doc)=>{
            
             doc.forEach(x=>{
                commentArry.push(x.data())
                console.log("ac "+x.data())
            }) 
        })
        console.log("ab "+commentArry.comment)
        enterData(User,commentArry)

 
    }
    function enterData(user){//מכניס את הנותים
        
            if(!flag)
            {
            let b1 = document.getElementById('btn');
            b1.style.display = "none"
            let t1=document.getElementById('txt')
            t1.style.display = "none"
            }

        

        let userName = document.getElementById('name');
        userName.innerHTML=user.first_name +" "+ user.last_name
        userName.className="font-weight-bold"

        let userAge = document.getElementById('age');
        userAge.innerHTML= " גיל  "+user.age
        userAge.className="text-dark "

        let userCity = document.getElementById('city');
        userCity.innerHTML="מ"+user.area
        if(flag)
        {
        let userPhone = document.getElementById('phone');
        userPhone.innerHTML="הטלפון שלי  "+user.phone_number
        }

        let userImg = document.getElementById('imge');
        userImg.src=user.imgUrl
        console.log(user.imgUrl)



        const ul = document.getElementById('ul')
        ul.className="ul-card mt-1 text-right"
        commentArry.forEach(doc=>{
            console.log("ss"+doc.comment)
            var li = document.createElement('li');
            li.textContent=doc.name+":"+ doc.comment
            ul.appendChild(li)
            
        })
        

    }

    async function update(){
        const id = uuid();
        console.log(User.first_name)
        if(flag){
          dbComment.doc(id).set({
            name: User.first_name,
            comment:comment,
            id_comment:id,
            id:data,
            id_write:currentUser.uid
         }).then(() =>{console.log("sucsse comment")
                    window.location.reload()}
         )
         .catch((error)=>{
            console.error("Error writing document: ", error);
         })
        }

            
    }


    return(
        <div>
            
        <Nav/>

        <div className="bg-warning">
            <h1 className="text-center">דף משתמש</h1>

            <div className="container mt-3">
                <div className="card">
                    <div className="top-container"> 
                        <img  className="img-fluid profile-image" width="100" alt="profile" id="imge"/>
                        <div className="ml-3">
                            <h2 className="name" id="name"> </h2>
                            <p  className="mail" id="age"></p>
                            <p className="mail"id="city" ></p>
                            <p className="mail" id="phone"></p>
                        </div>
                    </div>
                    <div>
                        <h3 className="name">ביקורות</h3>
                        <div className="w3-container">
                        <ul id="ul">
                        </ul>
                        </div>
                    </div>  
                    <div className="text-right " dir="rtl">                          
                        <textarea className="form-control" rows="1" id="txt" onChange={(e)=> setComment(e.target.value)}></textarea>
                    </div>
                        <Button className="button-card mb-3" id="btn" onClick={update}>הוסף ביקורת</Button>
                </div>
            </div>

        </div>
    </div>
    )
}

export default CardProfile;