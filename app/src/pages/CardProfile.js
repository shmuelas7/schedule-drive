import {React} from 'react';
import Nav from "../component/Nav";
import '../style/CardProfile.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {dbUser} from '../firebase'
import Button  from 'react-bootstrap/Button';
import { useAuth } from "../contexts/AuthContext"
import { useState} from 'react';

function CardProfile(){
    const history = useHistory()
    const { currentUser } = useAuth();
    const [state, setstate] = useState("")
    const data = history.location.id
    console.log("info" + data)

    useEffect(getdata)

    async function getdata(){
        var dataUser =""
       await dbUser.doc(data).get().then((value)=> {
            dataUser = value.data()
            
        })
        enterData(dataUser)
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

        let userPhone = document.getElementById('phone');
        userPhone.innerHTML="הטלפון שלי  "+user.phone_number

        let userImg = document.getElementById('imge');
        userImg.src=user.imgUrl
        console.log(user.imgUrl)

    }
    async function update(){
        var user =""
        await dbUser.doc(currentUser.uid).get().then((value)=> {
             user = value.data()
        })

         await dbUser.doc(data).update({
            comment:user.first_name +":"+state
            
        })
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
                        <textarea className="form-control" rows="1" onChange={(e)=>setstate(e.target.value)}></textarea>
                        </div>
                        <Button className="button-card" onClick={update()}>הוסף ביקורת</Button>
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    </div>
    )
}

export default CardProfile;