import React from "react";
import './css/style.css';

function CourseModel() {
    return (
        <div className="courseModel">
            <div className="top">
                <h1><span id="title">Introduction to Something or Other</span><span id="course_id">2600</span><span className="circle">&#9679;</span>$<span id="tuition">500</span></h1>
                <h4 id="schedule">Fall 2023</h4>
            </div>
            <div className="middle">
                <p id="description">This is a really long winded description of this super fun course that you should take this semester.</p>
            </div>
            <div className="bottom">
                <div className="classNumber">
                    <h3>Class Number:<span id="classroom_number"> 1</span></h3>
                </div>
                <div className="maximum-capacity">
                    <h3>Capacity:<span id="maximum_capacity"> 27/30</span></h3>
                </div>
                <div className="credit-hours">
                    <h3>Credit Hours:<span id="credit_hours"> 1</span></h3>
                </div>
                <div className="addClass" style={{display: 'none'}}>
                    <button type="submit">Add Class</button>
                </div>
                <div className="removeClass">
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
                </div>
            </div>
        </div>
    )
}

export default CourseModel;