import {React} from 'react';
import Nav from "./Nav";
import Table from 'react-bootstrap/Table'



  

function Driver(){


    return(
        <div class="container-fluid Req-bg">
            <Nav/>
            <Table striped bordered hover variant="dark">
                <thead class="text-right">
                    <th>אשר נסיעה</th>
                    <th>מספר טלפון</th>
                    <th>יעד</th>
                    <th>מוצא</th>
                    <th>שעה</th>
                    <th>תאריך</th>
                    <th>שם המבקש</th>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </div>


    )
}

export default Driver;