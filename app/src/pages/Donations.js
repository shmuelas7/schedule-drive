import React, { useRef, useState } from "react"
import Nav from "../component/Nav"
import paypal from "../icon/paypal.png"
import "../style/Donations.css"




function Donations(){


    return(
       
        <div className="container-fluid">
            <Nav/>
            <div className="row  bg-warning">
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
            <div className="col-md-8 col-sm-12 col-xs-12">

                    <h1 className="text-center">תרומות לעמותה</h1>

                    <div class="center">
                        <h3>תרומה באמצעות פייפאל</h3>
                        <h5>ניתן לתרום דרך חשבון פייפאל בלחיצה על הכפתור הבא</h5>

                            <a href="https://www.paypal.com/il/home"> 
                                <img src={paypal} alt="img" className="icon1"/>
                            </a>

                            <p><b> התרומה מוכרת לצרכי מס לפי סעיף 46</b></p>

                 </div>  
            </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
        </div>
    );
}
export default Donations;