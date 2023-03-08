import './css/style.css';
import React from 'react';
import { Link } from 'react-router-dom';

function CreateLogin() {
    return (
        <div className='loginOverall'>
            <div className='loginContainer'>
                <div className='loginHeader'>
                    <h1>Login</h1>
                </div>
                <div className='credentials'>
                    <label>Email:</label>
                    <input type="text" id="user_email" required></input>
                    <label>Password:</label>
                    <input type="text" id="user_password" required></input>
                    <Link to ={'/StudentHome'}><button type="submit" href="/Home">Login</button></Link>
                </div>
                <div className='signUp'>
                    <p>Don't have an account? <Link to={'/SignUp'}>Sign Up</Link>
                    <br/>
                    <br/>
                    <Link to={'/AdminPage'}>Admin Quick Link</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default function Login() {
    return (<CreateLogin />)
}