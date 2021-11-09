import {React} from 'react';
import Nav from "../component/Nav";
import '../style/CardProfile.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {dbUser} from '../firebase'
import Button  from 'react-bootstrap/Button';
import { useAuth } from "../contexts/AuthContext"
import { useState} from 'react';
import firebase from 'firebase';
import "firebase/firestore";

function CardProfile(){
    const history = useHistory()
    const { currentUser } = useAuth();
    const [comment, setcoment] = useState("")
    
    const data = history.location.id
    const flag =history.location.flag
    console.log("info" + data)
    console.log("flag " + flag)

    useEffect(getdata)
    var User =""
    async function getdata(){
       
       await dbUser.doc(data).get().then((value)=> {
            User = value.data()
            
        })
        enterData(User)
    }
    function enterData(user){//מכניס את הנותים 
        let userName = document.getElementById('name');
        userName.innerHTML=user.first_name +" "+ user.last_name
        userName.className="font-weight-bold"

        let userAge = document.getElementById('age');
        userAge.innerHTML= " בן  "+user.age
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

    }
    async function update(){
        if(flag){
         await firebase.firestore().collection("comment").doc().set({
            name:User.first_name,
            comment:comment,
            id:data
         })
         console.log("ok")
        }
        else
        {
            setTimeout(() => {
                let b1 = document.getElementById('btn');
                b1.style.display = "none"
                let t1=document.getElementById('txt')
                t1.style.display = "none"

                },500)
 
        }

            
    }


    return(
        <div className="container-fluid">
            
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
                    
                    <h3 className="name">ביקורות</h3>
                    <br></br>
                    <div className="w3-container">
                        <ul>
                            <li><b>איציק :</b> הגיע בזמן ומאוד עזר לי</li>
                            <li><b>לאה :</b> אחלה נהג</li>
                            <li><b>דני :</b> ממליץ מאוד לנסוע איתו</li>
                            </ul>
                            </div>  
                            <div className="text-right" dir="rtl">                          
                        <textarea className="form-control" rows="1" id="txt" onChange={(e)=>setcoment(e.target.value)}></textarea>
                        </div>
                        <Button className="button-card" id="btn" onClick={update()}>הוסף ביקורת</Button>
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    </div>
    )
}

export default CardProfile;