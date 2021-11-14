import {React, useState} from 'react';
import '../style/Contact.css';
import logo from '../style/black logo.png'
import Button from 'react-bootstrap/Button';
import firebase from 'firebase';
import swal from 'sweetalert2'
import {dbContact} from '../firebase'
import { uuid } from 'uuidv4';

function Contact(){

	const [name,setName]=useState("")
	const [mail,setMail]=useState("")
	const [subject,setSubject]=useState("")
	const [messege,setMessege]=useState("")
	
	


	async function sentData(){
		const id = uuid();
        await dbContact.doc(id).set({
		id:id,
        name:name,
        mail:mail,
        subject:subject,
        messege:messege,
      })
      .then(() => {
          console.log("Document successfully written!");
          swal.fire("הבקשה נקלטה במערכת ", "success")
          
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });

	}


	async function handleSubmit(e) {
		e.preventDefault();
		sentData()
	}



    return(
     <div class="contact1 ">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt">
				<img src={logo} alt="IMG"/>
			</div>

			<form class="contact1-form validate-form" onSubmit={handleSubmit}>
				<span class="contact1-form-title">
					יצירת קשר
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1 text-right" type="text" name="name" placeholder="שם" onChange={(e)=>setName(e.target.value)}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1 text-right" type="text" name="email" placeholder="מייל" onChange={(e)=>setMail(e.target.value)}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1 text-right" type="text" name="subject" placeholder="נושא"onChange={(e)=>setSubject(e.target.value)}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1 text-right" name="message" placeholder="הודעה" onChange={(e)=>setMessege(e.target.value)}></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<Button type="submit" class="contact1-form-btn">שלח</Button>
				</div>
			</form>
		</div>
	</div>
    )
}

export default Contact;