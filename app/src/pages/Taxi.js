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

    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    const [show4,setShow4] = useState(false)
    const [show5,setShow5] = useState(false)
    const [show6,setShow6] = useState(false)





    return(
       
        <div className="container-fluid">
            <Nav/>
            <div className="row  bg-warning">
                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <h1 className="text-center"> הזמנת מוניות </h1>
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <h5>בהזמנת מונית מאחת התחנות הללו דרך האתר ישנה הנחה של 10%</h5>
                </div>
            </div>
            <div className="row bg-warning">

                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <a href="https://www.340.co.il/Pages/KastelTaxi.php?sID=152&dID=8&kID=1066"> 
                        <img src={castel} alt="img" className="icon1"/>
                    </a>
                    <br/>
                    <button onClick={()=>setShow1(!show1)}>הצגת מספר</button>
                        {
                            show1?<h4>*3242</h4>:null
                        }
                </div>

                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <a href="https://www.taxitogo.co.il/%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%92%D7%91%D7%A2%D7%AA%D7%99%D7%99%D7%9D-%D7%98%D7%A7%D7%A1%D7%99-%D7%98%D7%95-%D7%92%D7%95-taxitogo/"> 
                        <img src={giva} alt="img" className="icon1"/>
                    </a>
                    <br/>
                    <button onClick={()=>setShow2(!show2)}>הצגת מספר</button>
                        {
                            show2?<h4>058-5007008</h4>:null
                        }
                </div>

                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <a href="https://taxi-shoham.co.il/%D7%AA%D7%97%D7%A0%D7%AA-%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%91%D7%A9%D7%95%D7%94%D7%9D/"> 
                        <img src={shoham} alt="img" className="icon1"/>
                    </a>
                    <br/>
                    <button onClick={()=>setShow3(!show3)}>הצגת מספר</button>
                        {
                            show3?<h4>03-3818000</h4>:null
                        }
                </div>

                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <a href="https://stars-taxi.co.il/"> 
                        <img src={stars} alt="img" className="icon1"/>
                    </a>
                    <br/>
                    <button onClick={()=>setShow4(!show4)}>הצגת מספר</button>
                        {
                            show4?<h4>08-9106106</h4>:null
                        }
                </div>
                
                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <a href="http://www.taxik8.com/%D7%90%D7%99%D7%A0%D7%93%D7%A7%D7%A1-%D7%A9%D7%9C-%D7%9E%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%A7%D7%A8%D7%99%D7%AA-%D7%A9%D7%9E%D7%95%D7%A0%D7%94/"> 
                        <img src={k8} alt="img" className="icon1"/>
                    </a>
                    <br/>
                    <button onClick={()=>setShow5(!show5)}>הצגת מספר</button>
                        {
                            show5?<h4>052-9121933</h4>:null
                        }
                </div>

                <div className="col-md-2 col-sm-12 col-xs-12 text-center">
                    <a href="https://www.taxys.info/"> 
                        <img src={itz} alt="img" className="icon1"/>
                    </a>
                    <br/>
                    <button onClick={()=>setShow6(!show6)}>הצגת מספר</button>
                        {
                        show6?<h4>054-4641726</h4>:null
                        }
                </div>
            </div>
        
    </div>
    );
}
export default Taxi;