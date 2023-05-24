import './css/style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentHome from './StudentHome';

function auth(users){

    console.log(users)
    const auth_username = 'test_auth_username'; /*document.getElementById("username")*/
    const auth_password = 'test_auth_username'; /*document.getElementById("username")*/

    for (let i = 0; i < users.length; i++) {
      if  (incudes(auth_username && auth_password) = true){
        const authRoute = "/studenthome"
        const studentId = i
  
      }else{
          const authRoute = "/signUp"
          console.log("not valid username or password")
      }
    }
}

function CreateLogin() {
const[setUsers] = useState()

const fetchData = () => {
    fetch("/getLoginUser")
    .then(response => {
        return response.json()
    }).then(data => {
        console.log("data.users[0] is: " + data.users[0]);
        setUsers(data.users)
}).catch(console.error)}

 useEffect(() => {
    fetchData()
 }, []);


let authRoute = "" // was "./"

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
                    <Link to = {authRoute}><button onClick = {auth} type="submit" id="loginBtn">Login</button></Link>


                    {/* { input.addEventListener("keypress", function(event) {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            document.getElementbyId("loginBtn").click();
                        }
                    });} */}

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