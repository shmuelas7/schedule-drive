import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from "./Nav";

function Profile(){

    return(
       
        <div class="container-fluid">
            <Nav/>
            <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 "></div>
            <div class="col-md-4 col-sm-4 col-xs-12 ">
            <form >
                        <h1 class="text-center">עידכון פרטיים אישיים </h1>

                        <div>
                            <h5 h5 class=" text-right"> עידכון מספר טלפון</h5>
                            <input placeholder="מספר נייד*" class="form-control text-right" ></input>
                        </div>
                        <div>
                            <h5 class=" text-right">  שינוי סיסמה</h5>
                            <input type="password" placeholder="הכנס סיסמה ישנה" class="form-control text-right" ></input>
                            <input type="password" placeholder="הכנס סיסמה חדשה" class="form-control text-right" ></input>
                        </div>
                        <h5 class=" text-right">שינוי תמונת פרופיל</h5>
                        <div class="custom-file">
                             <input type="file" class="custom-file-input" id="customFile"/>
                            <label class="custom-file-label " for="customFile">בחר תמונה</label>
                        </div>

                        <Button type="submit" variant="dark"  block  className="log-btn">שלח</Button>              
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Profile;