import React from "react";
import './css/style.css';

function CreateAdminPage() {
    return(
        <div id="adminOverall">
            <div id="topBar">
                <a href="/AdminPage"><h3>Admin User Name</h3></a>
                <a href="/Login"><h3>Log Out</h3></a>
            </div>
            <div id="adminMain">
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
                    <div className="courseModel">
                        <div className="top">
                            <h1 id="title">Introduction to Something or Other 2600 <span className="circle">&#9679;</span><span id="tuition"> $500</span></h1>
                            <h4 id="semester">Fall 2023</h4>
                        </div>
                        <div className="bottom">
                        <div className="classNumber">
                            <h3>Class Number:<span id="classNumber"> 1</span></h3>
                        </div>
                            <div className="maximum-capacity">
                                <h3>Capacity:<span id="maximum-capacity"> 27/30</span></h3>
                            </div>
                            <div className="credit-hours">
                                <h3>Credit Hours:<span id="credit-hours"> 1</span></h3>
                            </div>
                            <div className="addClass" style={{display: 'none'}}>
                                <button type="submit">Add Class</button>
                            </div>
                            <div className="removeClass">
                                <button type="submit">Remove Class</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function AdminPage() {
    return(<CreateAdminPage />)
}