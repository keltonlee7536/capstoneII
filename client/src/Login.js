import './css/style.css';
import React from 'react';

function CreateLogin() {
    return (
        <div className='loginOverall'>
            <div className='loginContainer'>
                <div className='loginHeader'>
                    <h1>Login</h1>
                </div>
                <div className='credentials'>
                    <label>Email:</label>
                    <input type="text" required></input>
                    <label>Password:</label>
                    <input type="text" required></input>
                    <a href='/StudentHome'><button type="submit" href="/Home">Login</button></a>
                </div>
                <div className='signUp'>
                    <p>Don't have an account? <a href='/SignUp'>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}
export default function Login() {
    return (<CreateLogin />)
}