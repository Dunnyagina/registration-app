import React from 'react'
import {useEffect, useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const {success, loading, user} = useContext();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (success) {
            navigate("/")
        }
    }, [])

  return (
    <form className='form'>
        <div>
            <div className='form-group'>
            <label className='username'>username</label>
            <input type="text" className='form-control' 
                placeholder='Enter username' value={username}/>

            </div>

            <div className='form-group'>
            <label className='email'>email</label>
            <input type="email" className='form-control' 
                placeholder='example@gmail.com' value={email}/>

            </div>

            <div className='form-group'>
            <label className='password'>password</label>
            <input type="password" className='form-control' 
                placeholder='enter a valid password' value={password}/>

            </div>
            <button type='submit'>Submit</button>

            <div className='row'>
                I already have an account
                <Link to="/login">Login to your account</Link>
            </div>
        </div>
    </form>
  )
}

export default Register