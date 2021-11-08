import React, { useRef, useState } from "react"
import Nav from "../component/Nav"
import giva from "../icon/giva.png"
import castel from "../icon/castel.png"
import shoham from "../icon/shoham.png"
import stars from "../icon/stars.png"
import "../style/taxi.css"




function Taxi(){


    return(
       
        <div className="container-fluid">
            <Nav/>
            <div className="row  bg-warning">
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
            <div className="col-md-8 col-sm-12 col-xs-12">

                    <h1 className="text-center"> הזמנת מוניות </h1>

                    <div class="center">
                        <h5>בהזמנת מונית מאחת התחנות הללו דרך האתר ישנה הנחה של 10%</h5>

                            <a href="https://www.340.co.il/Pages/KastelTaxi.php?sID=152&dID=8&kID=1066"> 
                                <img src={castel} alt="img" className="icon1"/>
                            </a>


                            <a href="https://www.taxitogo.co.il/%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%92%D7%91%D7%A2%D7%AA%D7%99%D7%99%D7%9D-%D7%98%D7%A7%D7%A1%D7%99-%D7%98%D7%95-%D7%92%D7%95-taxitogo/"> 
                                <img src={giva} alt="img" className="icon1"/>
                            </a>

                            <a href="https://taxi-shoham.co.il/%D7%AA%D7%97%D7%A0%D7%AA-%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%91%D7%A9%D7%95%D7%94%D7%9D/"> 
                                <img src={shoham} alt="img" className="icon1"/>
                            </a>

                            
                            <a href="https://stars-taxi.co.il/"> 
                                <img src={stars} alt="img" className="icon1"/>
                            </a>







                 </div>  
            </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
        </div>
    );
}
export default Taxi;