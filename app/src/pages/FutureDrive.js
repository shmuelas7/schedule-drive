import React from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'

  

function FutureDrive(){
    return(
        <div class="container-fluid Req-bg" >
            <Nav/>
            <Table striped bordered hover variant="dark">
                <thead class="text-right">
                    <tr>
                        <th>עריכת נסיעה</th>
                        <th>סטטוס</th>
                        <th>אזור</th>
                        <th>מספר טלפון</th>
                        <th>יעד</th>
                        <th>מוצא</th>
                        <th>שעה</th>
                        <th>תאריך</th>
                        <th>שם המבקש</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </div>


    )
}

export default FutureDrive;