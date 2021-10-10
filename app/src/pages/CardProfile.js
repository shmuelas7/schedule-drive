import {React} from 'react';
import '../style/Contact.css';
import Nav from "../component/Nav";
import '../style/CardProfile.css';


function CardProfile(){
    return(
        <div className="container-fluid">
            
        <Nav/>

        <div className="bg-warning">
            <h1 className="text-center">דף משתמש</h1>

            <div class="container mt-3">
                <div class="card">
                    <div class="top-container"> 
                        <img src="https://i.imgur.com/G1pXs7D.jpg" class="img-fluid profile-image" width="100">
                        </img>
                        <div class="ml-3">
                            <h2 class="name">יוסי כהן</h2>
                            <p class="mail">25</p>
                            <p class="mail"><b>פתח תקווה</b></p>
                            <p class="mail">05236416497</p>
                            <p class="mail">yossi@gmail.com</p>
                        </div>
                    </div>
                    
                    <h3 class="name">ביקורות</h3>
                    <br></br>
                    <div class="w3-container">
                        <ul>
                            <li><b>איציק :</b> הגיע בזמן ומאוד עזר לי</li>
                            <li><b>לאה :</b> אחלה נהג</li>
                            <li><b>דני :</b> ממליץ מאוד לנסוע איתו</li>
                            </ul>
                            </div>  
                            <div className="text-right" dir="rtl">                          
                        <textarea className="form-control" rows="1"></textarea>
                        </div>
                        <button>הוסף ביקורת</button>
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    </div>
    )
}

export default CardProfile;