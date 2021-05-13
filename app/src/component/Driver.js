import React from 'react';
import Nav from "./Nav";
import Table from 'react-bootstrap/Table'
  

function Driver(){
    return(
        <div class="container-fluid Req-bg">

            <Nav/>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>שם המבקש</th>
                    <th>תאריך</th>
                    <th>מוצא</th>
                    <th>יעד</th>
                    <th>שעה</th>
                    <th>מספר פלאפון</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>משה לוי</td>
                    <td>25.5</td>
                    <td>אריאל</td>
                    <td>פתח תקווה</td>
                    <td>10:30</td>
                    <td>053616314</td>
                    </tr>
                    <tr>
                    <td>נועם גולן</td>
                    <td>1.6</td>
                    <td>הרצליה</td>
                    <td>אשדוד</td>
                    <td>15:15</td>
                    <td>052154356</td>
                    </tr>
                    <tr>
                    <td>עמית ששון</td>
                    <td>19.5</td>
                    <td>חיפה</td>
                    <td>תל אביב</td>
                    <td>7:00</td>
                    <td>050346837</td>
                    </tr>
                </tbody>
            </Table>
        </div>


    )
}

export default Driver;