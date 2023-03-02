import './css/style.css';
import React from 'react';

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
                            <input type="text" required></input>
                            <label>User Name:</label>
                            <input type="text" required></input>
                            <label>Create Password:</label>
                            <input type="text" required></input>
                            <button type="submit" href="/Home">Sign Up</button>
                        </div>
                        <div className='credentials'>
                            <label>First Name:</label>
                            <input type="text" required></input>
                            <label>Last Name:</label>
                            <input type="text" required></input> 
                            <label>Phone Number:</label>
                            <input type="number"></input> 
                            <label>Address:</label>
                            <input type="text" required></input>   
                        </div>
                    </div>
                    <div className='signUp'>
                        <p>Already have an account? <a href='/Login'>Login</a></p>
                    </div>
                </div>
            </div>
        )
}

export default function SignUp() {
    return(<CreateSignUp />)
}