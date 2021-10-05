import {React} from 'react';
import Nav from "../component/Nav";
import '../style/Contact.css';
import logo from '../style/black logo.png'



function Contact(){



    return(
     <div class="contact1 ">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt">
				<img src={logo} alt="IMG"/>
			</div>

			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					יצירת קשר
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1 text-right" type="text" name="name" placeholder="שם" />
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1 text-right" type="text" name="email" placeholder="מייל"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1 text-right" type="text" name="subject" placeholder="נושא"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1 text-right" name="message" placeholder="הודעה"></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn">
							שלח
					</button>
				</div>
			</form>
		</div>
	</div>


    )
}

export default Contact;