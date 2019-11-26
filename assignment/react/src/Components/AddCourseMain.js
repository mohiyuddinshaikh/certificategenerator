import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../style.css';
import CourseMenu from './CourseMenu';
import CreateCourse from './CreateCourse';
import CourseList from './CourseList'

const AddCourseMain = () => {
    return (
        <div>
        <BrowserRouter>
        <CourseMenu />
            <Switch>
                <Route path="/createcourse" exact component={CreateCourse} />
                <Route path="/courselist" component={CourseList} />
                
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default AddCourseMain;