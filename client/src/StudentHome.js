import React from "react";
import './css/style.css';

function CreateStudentHome() {
    return(
    <div id="studentHomeOverall">
        <div id="topBar">
            <a href="/StudentHome"><h3>User Name</h3></a>
            <a href="/Login"><h3 id="Log Out">Log Out</h3></a>
        </div>
        <div id="studentMain">
            <h1>My Information</h1>
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
            <div id="studentCourses">
                <div id="header">
                    <h1>My Courses</h1>
                    <a href="Courses"><button>Add Classes</button></a>
                </div>
                <div id="courseContainer">
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
            <div id="studentCreditHours">
                <h1>My Credit Hours: <span id="creditHours">4</span></h1>
            </div>
            <div id="studentTuitionFees">
                <h1>My Tuition Fees: <span id="Fees">$2000</span></h1>
            </div>
        </div>
    </div>
    )
}
export default function StudentHome(){
    return(<CreateStudentHome />)
}