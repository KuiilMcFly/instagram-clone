import React from 'react'
import RegisterForm from '../components/Auth/RegisterForm'

const Register = () => {
  return (
    <div className="container">
        <div>
            <RegisterForm/>
            <p>Hai un account? Accedi</p>
        </div>
    </div>
  )
}

export default Register