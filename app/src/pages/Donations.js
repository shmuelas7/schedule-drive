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
                        <h5>לחץ על התמונה על מנת לתרום לעמותה בצורה מאובטחת</h5>

                        <div className="col-md-2 col-sm-12 col-xs-12 text-center ">
                            <a href="https://www.paypal.com/il/home"> 
                                <img src={paypal} alt="img" className="icon1"/>
                                <br/>
                            </a>
                    </div>

                 </div>  
            </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
        </div>
    );
}
export default Donations;