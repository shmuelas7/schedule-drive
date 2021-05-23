
import Button from 'react-bootstrap/Button';
import  '../style/Register.css';


 function Register(){
   

    return(

        <div class="container-fluid reg-bg">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12 "></div>
                <div class="col-md-4 col-sm-4 col-xs-12 ">
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 ">
                    <form class="from-container text-light" >
                        <h1 class="text-center">טופס הרשמה</h1>
                        <div class="from-group">
                            <h5 class=" text-right">שם פרטי</h5>
                            <input placeholder="שם פרטי*" class="form-control text-right" required></input>
                        </div>
                        <div>
                            <h5 class=" text-right" >שם משפחה</h5>
                            <input placeholder="שם משפחה*" class="form-control text-right" required ></input>
                        </div>
                        <div>
                            <h5 class=" text-right">מייל</h5>
                            <input placeholder="מייל*" class="form-control text-right" required ></input>
                        </div>
                        <div>
                            <h5 h5 class=" text-right">טלפון</h5>
                            <input placeholder="מספר נייד*" class="form-control text-right" required ></input>
                        </div>
                        <div>
                            <h5 class=" text-right">  סיסמה</h5>
                            <input type="password" placeholder="סיסמה*" class="form-control text-right" required id="pwd" name="password"></input>
                        </div>
                        <div>
                            <h5 class=" text-right">אימות סיסמה</h5>
                            <input type="password" placeholder="אישור סיסמה*" class="form-control text-right" required id="pwd" name="password"></input>
                        </div>
                        <h5 class=" text-right">הוספת תמונת פרופיל</h5>
                        <div class="custom-file">
                             <input type="file" class="custom-file-input" id="customFile"/>
                            <label class="custom-file-label " for="customFile">בחר תמונה</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <h5 class="form-check-label " for="inlineRadio1">מסיע</h5>
                        </div>
                        <div class="form-check form-check-inline ">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <h5 class="form-check-label" for="inlineRadio2">נוסע</h5>
                        </div>
                        <Button type="submit" variant="dark"  block  className="log-btn">שלח</Button>              
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;