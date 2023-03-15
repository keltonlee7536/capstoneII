import './css/style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentHome from './StudentHome';

function auth(users){
    const auth_username = document.getElementById('username').innerHTML
    const auth_password = document.getElementById('user_password').innerHTML

    if (auth_username == users[0].username && auth_password == users[0].password){
    const authRoute = "/studenthome"
    console.log("authenticated" + authRoute)

    }else{
        let authRoute = "/login"
        window.alert("not valid username or password")
        console.log("authentication failed" + authRoute)
    }
}

function CreateLogin() {

    //fetchging the data
const[users, setUsers] = useState()

const fetchData = () => {
    fetch("/getuser")
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data.users[0]);
        setUsers(data.users[0])
}).catch(console.error)}

useEffect(() => {
    fetchData()
}, []);

    const authRoute = "/SignUp"

    return (
        <div className='loginOverall'>
            <div className='loginContainer'>
                <div className='loginHeader'>
                    <h1>Login</h1>
                </div>
                <div className='credentials'>
                    <label>Username or Email:</label>
                    <input type="text" id="username" required></input>
                    <label>Password:</label>
                    <input type="text" id="user_password" required></input>
                    <Link to = "/studentHome"{/*{authRoute}*/}><button onClick = {auth} type="submit" id="loginBtn">Login</button></Link>

                    {/* input.addEventListener("keypress", function(event) {
                        if (event.key === "Enter") {
                            // event.preventDefault();
                            document.getElementbyId("loginBtn").click();
                        }
                    }); */}



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