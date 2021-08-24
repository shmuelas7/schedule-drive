import {React} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'



  

function Driver(){


    return(
        <div className="container-fluid Req-bg">
            <Nav/>
            <h1 className="text-center">כל הנסיעות</h1>
            <Table striped bordered hover variant="dark">
                <thead className="text-right">
                <tr>
                    <th>אשר נסיעה</th>
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

export default Driver;