import React from 'react'
import { useState } from 'react'
import './index.css'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [userPass, setPassword] = useState('')
  const [errorMessage, setErrMessage] = useState('')


  const history = useHistory()

  const submitForm = async (e) => {
    e.preventDefault();
    const url = 'https://back-end-api.onrender.com/login'
    const userDetails = {
      emailId: email,
      password: userPass,

    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log("response", data)
    if (data.status === true) {
      setErrMessage('')
      localStorage.setItem("status", data.status)
      history.push('/')
    }
    else {
      setErrMessage(data.message)
    }
    setPassword('')
    setEmail('')
  }
  const getId = localStorage.getItem("status")
  if (getId !== null) {
    return <Redirect to="/" />
  }
  return (
    <div className='login-container'>
      <div className='Page-container'>
        <form onSubmit={submitForm} autoComplete="off">
          <h3 className='loginPage-title'>LoginPage</h3>
          <label htmlFor='email'>Email</label>
          <div className='input-card'>
            <input id='email' type="email" value={email} placeholder='lbhagya818@gmail.com' onChange={(e) => setEmail(e.target.value)} />
            <p className='icons' ></p>
            <RiLockPasswordLine className='icons' />
          </div>&nbsp; <br /> <br />
          <label htmlFor='Mailpassword'>password</label>
          <div className='input-card'>
            <input id='Mailpassword' type="password" value={userPass} placeholder='bhagya2023' onChange={(e) => setPassword(e.target.value)} />
            <p className='icons'></p>
          </div>&nbsp; <br /> <br />

          <Button variant="success" type='submit'>Login</Button>
          <p className='error-message'>{errorMessage}</p>
        </form>
      </div>
    </div>
  )
}
export default LoginPage