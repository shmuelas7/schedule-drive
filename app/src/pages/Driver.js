import {React} from 'react';
import Nav from "../component/Nav";
import Table from 'react-bootstrap/Table'
import Search from '../component/Search';



  

function Driver(){


    return(
        <div className="container-fluid">
            <Nav/>
            
            <div className="bg-warning">
            <h1 className="text-center">כל הנסיעות</h1>
            <Search/>
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
        </div>


    )
}

export default Driver;