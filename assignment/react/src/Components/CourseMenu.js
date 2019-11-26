import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import '../style.css';

//Link acts like <a href=""> tag in HTML

const CourseMenu = () => {
    return (
        <div className="container coursemenu">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 offset-lg-5 coursemenustyle">
                    <ul>
                        <li><NavLink activeClassName="main-course-active" to="/createcourse">Add Course</NavLink></li>
                        <li> <NavLink activeClassName="main-course-active" to="/courselist">Course List</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        // <div className="coursemenustyle">
            
        // </div>
    )
}

export default CourseMenu;