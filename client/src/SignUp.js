import './css/style.css';
import React from 'react';
import { Link } from 'react-router-dom';

function CreateSignUp() {
        return (
            <div className='signOverall'>
                <div className='signContainer'>
                    <div className='signHeader'>
                        <h1>Sign Up</h1>
                    </div>
                    <div id="information">
                        <div class="credentials2">
                            <label>Email:</label>
                            <input type="text" id="create_email" required></input>
                            <label>User Name:</label>
                            <input type="text" id="create_username" required></input>
                            <label>Create Password:</label>
                            <input type="text" id="create_password" required></input>
                            <Link to={'/StudentHome'}><button type="submit">Sign Up</button></Link>
                        </div>
                        <div className='credentials'>
                            <label>First Name:</label>
                            <input type="text" id="create_first_name" required></input>
                            <label>Last Name:</label>
                            <input type="text" id="create_last_name" required></input> 
                            <label>Phone Number:</label>
                            <input type="number" id="create_phone_number" required></input> 
                            <label>Address:</label>
                            <input type="text" id="create_address" required></input>   
                        </div>
                    </div>
                    <div className='signUp'>
                        <p>Already have an account? <Link to={'/Login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        )
}

export default function SignUp() {
    return(<CreateSignUp />)
}