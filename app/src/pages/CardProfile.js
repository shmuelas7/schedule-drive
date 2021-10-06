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

            <div class="container d-flex justify-content-center mt-5">
                <div class="card">
                    <div class="top-container"> 
                        <img src="https://i.imgur.com/G1pXs7D.jpg" class="img-fluid profile-image" width="90">
                        </img>
                        <div class="ml-3">
                            <h2 class="name">יוסי כהן</h2>
                            <p class="mail">yossi@gmail.com</p>
                            <p class="mail">05236416497</p>
                        </div>
                    </div>
                    
                    <h3 class="mt-4">ביקורות</h3>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default CardProfile;