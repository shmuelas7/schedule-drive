import React from 'react';
import Button  from 'react-bootstrap/Button';
import {setDataReceivedFromChild} from '../pages/Driver';
import { useState} from 'react'


 function  Search(props){

return(

  <div className="container-fluid " dir="rtl">
    <nav className=" navbar navbar-expand-lg navbar-dark indigo mb-4">
    <div className="navbar-header row">
        <div className="col-2">
            <h5 className="navbar-brand text-right text-light">סדר לפי:</h5>
        </div>
      </div>
    <div className="col-2">
        <Button className="btn btn-light"   block onClick={(e)=>{setDataReceivedFromChild("exit")}}  >העיר שלי</Button>
    </div>
    <div className="col-2">
        <Button className="btn btn-light" block onClick={(e)=>{setDataReceivedFromChild("date")}} >תאריך</Button>
    </div>
    </nav>
  </div>

);
}

export default Search;