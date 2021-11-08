import React, { useRef, useState } from "react"
import Nav from "../component/Nav"
import giva from "../icon/giva.png"
import castel from "../icon/castel.png"
import shoham from "../icon/shoham.png"
import stars from "../icon/stars.png"
import k8 from "../icon/k8.png"
import itz from "../icon/itz.png"
import "../style/taxi.css"




function Taxi(){

    const [show,setShow] = useState(false)



    return(
       
        <div className="container-fluid">
            <Nav/>
            <div className="row  bg-warning">
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
            <div className="col-md-8 col-sm-12 col-xs-12">

                    <h1 className="text-center"> הזמנת מוניות </h1>

                    <div class="center">
                        <h5>בהזמנת מונית מאחת התחנות הללו דרך האתר ישנה הנחה של 10%</h5>

                        <div className="row">


                        <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                            <a href="https://www.340.co.il/Pages/KastelTaxi.php?sID=152&dID=8&kID=1066"> 
                                <img src={castel} alt="img" className="icon1"/>
                            </a>
                            <br/>
                                {
                                    show?<h4>*3242</h4>:null
                                }

                                <button onClick={()=>setShow(!show)}>הצגת מספר</button>
                            </div>


                            <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                            <a href="https://www.taxitogo.co.il/%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%92%D7%91%D7%A2%D7%AA%D7%99%D7%99%D7%9D-%D7%98%D7%A7%D7%A1%D7%99-%D7%98%D7%95-%D7%92%D7%95-taxitogo/"> 
                                <img src={giva} alt="img" className="icon1"/>
                            </a>
                            <br/>
                                {
                                    show?<h4>058-5007008</h4>:null
                                }

                                <button onClick={()=>setShow(!show)}>הצגת מספר</button>
                            </div>



                            <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                            <a href="https://taxi-shoham.co.il/%D7%AA%D7%97%D7%A0%D7%AA-%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%91%D7%A9%D7%95%D7%94%D7%9D/"> 
                                <img src={shoham} alt="img" className="icon1"/>
                            </a>
                            <br/>
                                {
                                    show?<h4>03-3818000</h4>:null
                                }

                                <button onClick={()=>setShow(!show)}>הצגת מספר</button>
                            </div>


                            <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                            <a href="https://stars-taxi.co.il/"> 
                                <img src={stars} alt="img" className="icon1"/>
                            </a>

                                <br/>
                                {
                                    show?<h4>08-9106106</h4>:null
                                }

                                <button onClick={()=>setShow(!show)}>הצגת מספר</button>
                            </div>


                            <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                            <a href="http://www.taxik8.com/%D7%90%D7%99%D7%A0%D7%93%D7%A7%D7%A1-%D7%A9%D7%9C-%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%A7%D7%A8%D7%99%D7%AA-%D7%A9%D7%9E%D7%95%D7%A0%D7%94/"> 
                                <img src={k8} alt="img" className="icon1"/>
                            </a>

                                <br/>
                                {
                                    show?<h4>052-9121933</h4>:null
                                }

                                <button onClick={()=>setShow(!show)}>הצגת מספר</button>
                            </div>


                            <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                            <a href="https://www.taxys.info/"> 
                                <img src={itz} alt="img" className="icon1"/>
                            </a>

                                <br/>
                                {
                                    show?<h4>054-4641726</h4>:null
                                }

                                <button onClick={()=>setShow(!show)}>הצגת מספר</button>
                            </div>


                            </div>

                            


                           {/*} {
                                show?<h1>000</h1>:null
                            }

                        <button onClick={()=>setShow(!show)}>הצגת מספר</button> */}


                 </div>  
            </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 "></div>
        </div>
    );
}
export default Taxi;