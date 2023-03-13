import React, {useState, useEffect} from "react";
import './css/style.css';
import { Link } from "react-router-dom";
import CourseModel from './CourseModel';

function CreateStudentHome() {

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

    return(

    <div id="studentHomeOverall">
                {/* <div>
                    {users.length > 0 && (
                        <ul>
                            {users.map(user => (
                                <li key={user.user_id}>{user.username}</li>
                            ))}
                        </ul>
                    )}
                </div> */}
        
        <div id="topBar">
            <Link to={"/StudentHome"}>
                {<h3 id="username">{(users) ? users.username : null}</h3>}</Link>
            <Link to={"/Login"}><h3>Log Out</h3></Link>
        </div>

        <div id="studentMain">
            <h1>My Information</h1>
                <div id="studentInfo">
                <div id="info1">
                    <label>First Name:</label>
                    <input id="first_name" onChange={(e) => {setUsers({...users, ...{first_name: e.target.value}})}} value={(users) ? users.first_name : 'noth'}></input>

                    <label>Last Name:</label>
                    <input id="last_name" onChange={(e) => {setUsers({...users, ...{last_name: e.target.value}})}} value={(users) ? users.last_name : 'noth'}></input>

                    <label>User Name:</label>
                    <input id="first_name" onChange={(e) => {setUsers({...users, ...{username: e.target.value}})}} value={(users) ? users.username : 'noth'}></input>

                </div>
                <div id="info2">
                    <label>Phone Number:</label>
                    <input id="phone_number" onChange={(e) => {setUsers({...users, ...{phone_number: e.target.value}})}} value={(users) ? users.phone_number : 'noth'}></input>
                    <label>Address:</label>
                    <input id="address" onChange={(e) => {setUsers({...users, ...{address: e.target.value}})}} value={(users) ? users.address : 'noth'}></input>
                    <label>Email:</label>
                    <input id="email" onChange={(e) => {setUsers({...users, ...{email: e.target.value}})}} value={(users) ? users.email : 'noth'}></input>
                </div>
            </div>

            <div id="studentCourses">
                <div id="header">
                    <h1>My Courses</h1>
                    <Link to={'/Courses'}><button>Add Classes</button></Link>
                </div>
                <div id="courseContainer">
                    <CourseModel />
                    <CourseModel />
                    <CourseModel />
                </div>
            </div>
            <div id="studentCreditHours">
                <h1>My Credit Hours: <span id="creditHours">4</span></h1>
            </div>
            <div id="studentTuitionFees">
                <h1>My Tuition Fees: <span id="tuition">$2000</span></h1>
            </div>
        </div>
    </div>
    )
}
export default function StudentHome(){
    return(<CreateStudentHome />)
}