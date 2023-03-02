import React from 'react'
import RegisterForm from '../components/Auth/RegisterForm'
import '../Styles/registerForm.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="container">
        <div>
            <RegisterForm/>
            <p>Hai un account?<Link to="/">Accedi</Link></p>
        </div>
    </div>
  )
}

export default Register