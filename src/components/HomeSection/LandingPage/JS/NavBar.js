import React, { Fragment } from "react";
import {  NavLink } from "react-router-dom";
import classes from "../CSS/navbar.module.css";

const NavBar = () => {
    return (
        <Fragment>
                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                    >
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#" title="Hide navigation">
                        Hide navigation
                    </a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <NavLink className="nav_link" to="/" style={ ({ isActive }) => ({ 
                            color: isActive ? '#E55B00' : 'white' })}> Home </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_link" to="/projects" style={({ isActive }) => ({ 
                            color: isActive ? '#E55B00' : 'white' })}> Projects </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_link" to="/education" style={({ isActive }) => ({ 
                            color: isActive ? '#E55B00' : 'white' })}> Education </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_link" to="/experience" style={({ isActive }) => ({ 
                            color: isActive ? '#E55B00' : 'white' })}> Experiences </NavLink>
                        </li>
                    </ul>
                </nav>
        </Fragment>
    );
};

export default NavBar;