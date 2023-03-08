import React from "react";
import './css/style.css';
import { Link } from "react-router-dom";
import CourseModel from "./CourseModel";

function CreateCourses(){
    return(
        <div id="coursesOverall">
            <div id="topBar">
                <Link to={"/StudentHome"}><h3>User Name</h3></Link>
                <Link to={"/Login"}><h3>Log Out</h3></Link>
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
                        <CourseModel />
                    </div>
                </div>
                <div id="allCourses">
                    <div id="courseLocation">
                        <h1>All Courses</h1>
                        <CourseModel />
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