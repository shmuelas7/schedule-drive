import {React} from 'react';
import Nav from "../component/Nav";


function Contact(){



    return(
        <div className="container-fluid" dir="rtl">
            <Nav/>
            
            <div className="bg-warning">
            <h1 className="text-center">יצירת קשר</h1>

            <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' noValidate>

                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='שם'
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='מייל'
                    ></input>
                  </div>
                </div>

                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='נושא'
                    ></input>
                  </div>
                </div>

                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='הודעה'
                    ></textarea>
                  </div>
                </div>
                <button type="submit" variant="primary"  block className="log-btn mb-2">
                  שלח
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    

       
                <tbody>
                </tbody>
            </div>
        </div>


    )
}

export default Contact;