import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import HomePage from "../../HomePage";
import ProjectPage from "../../../ProjectsSection/ProjectPage";
import EducationPage from "../../../EducationSection/EducationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "../CSS/navbar.module.css";
import ExperiencePage from "../../../ExperiencesSection/ExperiencePage";

const NavBar = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectPage/>} />
                    <Route path="/education" element={<EducationPage/>} />
                    <Route path="/experience" element={<ExperiencePage/>} />
                </Routes>

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
            </BrowserRouter>
        </Fragment>
    );
};

export default NavBar;

/*



*/
