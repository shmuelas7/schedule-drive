import {React, useState} from 'react';
import Nav from "./Nav";
import Table from 'react-bootstrap/Table'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Alert } from "react-bootstrap"


  

function Driver(){

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
    return(
        <div class="container-fluid Req-bg">
        {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
            <Nav/>
            <Table striped bordered hover variant="dark">
                <thead>
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