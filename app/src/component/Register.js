
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../style/Register.css';


 function Register(){
   

    return(

        <div class="container" dir="rtl">
            <form class="was-validated" >
              <h1 class="text-center">טופס הרשמה</h1>
                <div class="row">
                    <div class="col-lg-4 col-xs-12">
                        <h5 class=" text-right">שם פרטי:</h5>
                        <input placeholder="שם פרטי*" class={ style.input} required></input>
                        <h5 class=" text-right" >שם משפחה:</h5>
                        <input placeholder="שם משפחה*" class="form-control" required ></input>
                        <h5 class=" text-right">מייל:</h5>
                        <input placeholder="מייל*" class="form-control" required ></input>
                        <h5 class=" text-right">טלפון:</h5>
                        <input placeholder="מספר נייד*" class="form-control" required ></input>
                        <h5 class=" text-right"> אישור סיסמה:</h5>
                        <input type="password" placeholder="סיסמה*" class="form-control" required id="pwd" name="password"></input>
                        <h5 class=" text-right">אימות סיסמה:</h5>
                        <input type="password" placeholder="אישור סיסמה*" class="form-control" required id="pwd" name="password"></input>
                        

                        <Button type="submit"  class="btn btn-primary">אישור</Button>
                    </div>
                </div>              
            </form>
        </div>

    );
}

export default Register;