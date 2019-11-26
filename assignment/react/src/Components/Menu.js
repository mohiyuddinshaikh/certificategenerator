import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import '../style.css'

//Link acts like <a href=""> tag in HTML

const Menu = () => {
    return (
        <div className="menustyle">
            <ul>
                <li><NavLink activeClassName="main-nav-active" exact to="/" >Dashboard</NavLink></li>
                <li> <NavLink  activeClassName="main-nav-active"  to="/createcertificate">Create Certificate</NavLink></li>
                <li><NavLink  activeClassName="main-nav-active"  to="/createcourse">AddCourse</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;