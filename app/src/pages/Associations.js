import React, { useRef, useState } from "react"
import Nav from "../component/Nav"
import war from "../icon/war.png"
import haim from "../icon/haim.png"
import lev from "../icon/lev.png"
import gdolim from "../icon/gdolim.jpg"
import miryam from "../icon/miryam.png"
import "../style/Associations.css"




function Associations(){


    return(
       
        <div className="container-fluid">
            <Nav/>

            <div className="row bg-warning" >
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <h1 className="text-center"> עמותות נוספות לעזרה </h1>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <h6 className="text-right">בלחיצה על האייקון תועבר לדף העמותה</h6>
                 </div>
            </div>
            <div className="row  bg-warning text-center">


                <div className="col-md-3 col-sm-12 col-xs-12">
                    <a href="https://www.hayim.org.il/"> 
                        <img src={haim} alt="img" className="icon1"/>
                    </a>
                </div>

                <div className=" col-md-3 col-sm-12 col-xs-12">
                    <a href="https://rachasheilev.org/"> 
                        <img src={lev} alt="img" className="icon1"/>
                    </a>
                </div>  

                <div className=" col-md-3 col-sm-12 col-xs-12">
                     <a href="https://donations.cancer.org.il/"> 
                        <img src={war} alt="img" className="icon1"/>
                    </a>
                </div>

                <div className=" col-md-3 col-sm-12 col-xs-12">    
                    <a href="http://darcheimiriam.org.il/"> 
                        <img src={miryam} alt="img" className="icon1"/>
                    </a>
                </div>  
            </div>  
        </div>
    );
}
export default Associations;