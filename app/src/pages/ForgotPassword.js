import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import logo from '../style/black logo.png'


export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <div className="bg-primary">
      <br/>
      <Card>
        <Card.Body >
        <img src={logo} alt="logo" className="login-logo" />
          <h2 className="text-center mb-4">איפוס סיסמה</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>הכנס מייל</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              אפס סיסמה
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">התחברות</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        צריך חשבון? <Link to="/Register">הרשמה</Link>
      </div>
    </div>
  )
}