import React from "react";
import './css/style.css';

function CreateCourses(){
    return(
        <div id="coursesOverall">
            <div id="topBar">
                <a href="/StudentHome"><h3>User Name</h3></a>
                <a href="/Login"><h3 id="Log Out">Log Out</h3></a>
            </div>
            <div id="coursesContainer">
                <div id="searchBar">
                    <label>Search Courses:</label>
                    <input type="text"></input>
                </div>
                <div id="myCourses">
                    <div id="courseLocation">
                        <div id="myCourseHeader">
                            <h1>My Courses</h1>
                            <button type="submit" id="submitClasses">Submit Classes</button>
                        </div>
                        
                        <div className="courseModel">
                            <div className="top">
                                <h1 id="title">Introduction to Something or Other 2600 <span className="circle">&#9679;</span><span id="tuition"> $500</span></h1>
                                <h4 id="semester">Fall 2023</h4>
                            </div>
                            <div className="middle">
                                <p>This is a really long winded description of this super fun course that you should take this semester.</p>
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
                <div id="allCourses">
                    <div id="courseLocation">
                        <h1>All Courses</h1>
                        <div className="courseModel">
                            <div className="top">
                                <h1 id="title">Course Name <span className="circle">&#9679;</span><span id="tuition"> $price</span></h1>
                                <h4 id="semester">Fall 2023</h4>
                            </div>
                            <div className="middle">
                                <p>This is a really long winded description of this super fun course that you should take this semester.</p>
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
                                <div className="addClass">
                                    <button type="submit">Add Class</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    )
}

export default function Courses() {
    return(<CreateCourses />)
}