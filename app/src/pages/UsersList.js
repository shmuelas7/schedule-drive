import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/manager.css'
import '../style/UsersList.css'
import logo from "../style/black logo.png"
import { useEffect } from 'react';
import {dbUser} from '../firebase'
import { useAuth } from "../contexts/AuthContext"
import Swal from 'sweetalert2';




function Manager(){

    useEffect(getData)
    
    const { currentUser } = useAuth();
    const { deletee } = useAuth();


     async function getData(){
        var users=[]
        await dbUser.where('deletUser','==',false).get().then((doc)=>{
            
            doc.forEach(user=>{
                
                    users.push(user.data())
            })
        })
        createUsers(users)
    }
      function createUsers(users){
        var card = document.querySelector(".cotainer-users")

        users.forEach(user=>{

            var div=document.createElement('div');
            div.className='card mb-3';
            div.style="width: 18rem;hight:180px"
            
            var img= document.createElement('img')
            img.src=user.imgUrl
            img.className="card-img-top im"
            img.style=" "
            
            var div2=document.createElement('div')
            div2.className="card-body"
            
            var h4  =document.createElement('h4')
            h4.className="card-title"
            h4.innerHTML=user.first_name+" "+user.last_name

            var btn1= document.createElement('input')
            btn1.type="button"
            btn1.className=" btn btn-info"
            btn1.value="יצירת קשר"
            btn1.onclick = (e) => {
                let phone = user.phone_number.substring(1);
                window.open("http://wa.me/972"+phone+"?text=")
              };
              var btn2= document.createElement('input')
              btn2.type="button"
              btn2.className=" btn  btn-danger ml-2"
              btn2.value="מחק משתמש"
              btn2.onclick = (e) => {
              Swal.fire({
                title:' מחיקת מישתמש',
                icon:'success',
                confirmButtonText: 'אישור',
                showDenyButton: true,
                denyButtonText: 'ביטול',
                }).then((result) => {
                if (result.isConfirmed) {
                    console.log("del")
                    dbUser.doc(user.id).update({
                      deletUser:true 
                    })
              console.log("sucsses")
              window.location.reload();
            }

                });
            }

            div2.appendChild(h4)
            div2.appendChild(btn1)
            div2.appendChild(btn2)
            div.appendChild(img)
            div.appendChild(div2)
            card.appendChild(div)


         })
      }

    return(
    <div className="p-3  bg-info">
        <div className=" text-center">
            <img src={logo} alt="logo" className="logo mb-5"/>
            <h1> רשימת משתמשים</h1>
        </div>

        <div className="cotainer-users"></div>
    </div>

    )
}

export default Manager;