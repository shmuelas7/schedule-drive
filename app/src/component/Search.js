import React from 'react';
import Button  from 'react-bootstrap/Button';

function Search(){


return(

  <div className="container-fluid " dir="rtl">
    <nav className=" navbar navbar-expand-lg navbar-dark indigo mb-4">
    <div className="navbar-header row">
        <div className="col-2">
            <h5 className="navbar-brand text-right text-light">סדר לפי:</h5>
        </div>
      </div>
    <div className="col-2">
        <Button className="btn btn-light" block>שם</Button>
    </div>
    <div className="col-2">
        <Button className="btn btn-light" block>תאריך</Button>
    </div>
    <div className="input-group col-6">
        <input type="search" className="form-control rounded" placeholder="חיפוש" aria-label="Search" />
        <Button type="button" className="btn btn-primary ">OK</Button>
    </div>
    </nav>
  </div>

);
}

export default Search;