import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../component/Footer';
import Nav from "../component/Nav";

function Profile(){

    return(
       
        <div className="container-fluid">
            <Nav/>
            <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12 "></div>
            <div className="col-md-4 col-sm-4 col-xs-12 ">
            <form >
                        <h1 className="text-center">עדכון פרטיים אישיים </h1>

                        <div>
                            <h5  className=" text-right"> עדכון מספר טלפון</h5>
                            <input placeholder="מספר נייד*" className="form-control text-right" ></input>
                        </div>
                        <div>
                            <h5 className=" text-right">  שינוי סיסמה</h5>
                            <input type="password" placeholder="הכנס סיסמה ישנה" className="form-control text-right" ></input>
                            <input type="password" placeholder="הכנס סיסמה חדשה" className="form-control text-right" ></input>
                        </div>
                        <h5 className=" text-right">שינוי תמונת פרופיל</h5>
                        <div className="custom-file">
                             <input type="file" className="custom-file-input" id="customFile"/>
                            <label className="custom-file-label ">בחר תמונה</label>
                        </div>

                        <Button type="submit" variant="primary"  block  className="log-btn">שלח</Button>              
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Profile;