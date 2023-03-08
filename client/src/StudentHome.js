import React from "react";
import './css/style.css';
import { Link } from "react-router-dom";
import CourseModel from './CourseModel';

function CreateStudentHome() {
    return(
    <div id="studentHomeOverall">
        <div id="topBar">
            <Link to={"/StudentHome"}><h3 id="username">User Name</h3></Link>
            <Link to={"/Login"}><h3>Log Out</h3></Link>
        </div>
        <div id="studentMain">
            <h1>My Information</h1>
            <div id="studentInfo">
                <div id="info1">
                    <label>First Name:</label>
                    <input type="text" id="first_name"></input>
                    <label>Last Name:</label>
                    <input type="text" id="last_name"></input>
                    <label>User Name:</label>
                    <input type="text" id="username"></input>
                </div>
                <div id="info2">
                    <label>Phone Number:</label>
                    <input type="number" id="phone_number"></input>
                    <label>Address:</label>
                    <input type="text" id="address"></input>
                    <label>Email:</label>
                    <input type="text" id="email"></input>
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