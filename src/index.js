import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomeSection/HomePage";
import EducationPage from "./components/EducationSection/EducationPage";
import ProjectPage from "./components/ProjectsSection/ProjectPage";
import ExperiencePage from "./components/ExperiencesSection/ExperiencePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectPage/>} />
                    <Route path="/education" element={<EducationPage/>} />
                    <Route path="/experience" element={<ExperiencePage/>} />
                </Routes>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
