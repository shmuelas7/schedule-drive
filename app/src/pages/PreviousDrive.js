import React from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';
  

function PreviousDrive(){
    return(
        <div className="container-fluid " >
            <div className=" bg-warning">
            <Nav/>
            <h1 className="text-center">היסטורית נסיעות</h1>
            <Search/>
            <Table striped bordered hover variant="dark">
                <thead className="text-right">
                    <tr>
                    <th>דירוג נהג / נוסע</th>
                    <th>מספר טלפון</th>
                    <th>יעד</th>
                    <th>מוצא</th>
                    <th>שעה</th>
                    <th>תאריך</th>
                    <th>שם המבקש / נהג</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
            </div>
        </div>


    )
}
export default PreviousDrive;