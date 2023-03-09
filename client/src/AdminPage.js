import React from "react";
import './css/style.css';
import { Link } from "react-router-dom";
import CourseModel from "./CourseModel";
import Tabs from './components/Tabs';

function CreateAdminPage() {
    return(
        <div id="adminOverall">
            <div id="topBar">
                <Link to={"/AdminPage"}><h3>Admin Home</h3></Link>
                <Link to={"/Login"}><h3>Log Out</h3></Link>
            </div>
            <div id="adminMain">
            <Tabs>
                <div label="Admin Information">
                    <div id="adminInfoHeader">
                        <h1>Admin Information</h1>
                        <button type="submit">Edit Information</button>
                    </div>
                    <div id="adminInfo">
                        <div id="info1">
                            <label>First Name:</label>
                            <input type="text"></input>
                            <label>Last Name:</label>
                            <input type="text"></input>
                            <label>User Name:</label>
                            <input type="text"></input>
                        </div>
                        <div id="info2">
                            <label>Phone Number:</label>
                            <input type="number"></input>
                            <label>Address:</label>
                            <input type="text"></input>
                            <label>Email:</label>
                            <input type="text"></input>
                        </div>
                    </div>
                </div>
                {/* /// */}
                <div label="Student Information">
                    <div id="searchBar">
                        <label>Search Student:</label>
                        <input type="text"></input>
                    </div>
                    <div id="studentInfoLocation">
                        <div id="studentInfoHeader">
                            <h1>Student Information</h1>
                            <button type="submit">Edit Information</button>
                        </div>
                        <div id="studentInfo">
                            <div id="info1">
                                <label>First Name:</label>
                                <input type="text"></input>
                                <label>Last Name:</label>
                                <input type="text"></input>
                                <label>User Name:</label>
                                <input type="text"></input>
                            </div>
                            <div id="info2">
                                <label>Phone Number:</label>
                                <input type="number"></input>
                                <label>Address:</label>
                                <input type="text"></input>
                                <label>Email:</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div id="studentScheduleHeader">
                            <h1>Student Schedule</h1>
                            <button type="submit">Submit Changes</button>
                        </div>
                        <div id="studentScheduleLocation">
                            <CourseModel />
                        </div>
                    </div>
                </div>
            </Tabs>
            </div>
        </div>
    )
}
export default function AdminPage() {
    return(<CreateAdminPage />)
}