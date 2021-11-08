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
            <div className="row  bg-warning">
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
            <div className="col-md-8 col-sm-12 col-xs-12">

                    <h1 className="text-center"> ארגונים רלוונטיים</h1>

                    <div class="center">
                        <h5>בלחיצה על האייקון תועבר לדף העמותה</h5>

                            <a href="https://www.hayim.org.il/"> 
                                <img src={haim} alt="img" className="icon1"/>
                            </a>

                            <a href="https://rachasheilev.org/"> 
                                <img src={lev} alt="img" className="icon1"/>
                            </a>

                            <a href="https://donations.cancer.org.il/"> 
                                <img src={war} alt="img" className="icon1"/>
                            </a>


                            <a href="http://darcheimiriam.org.il/"> 
                                <img src={miryam} alt="img" className="icon1"/>
                            </a>

                            <a href="https://gdolim.org.il/"> 
                                <img src={gdolim} alt="img" className="icon1"/>
                            </a>


                 </div>  
            </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
        </div>
    );
}
export default Associations;