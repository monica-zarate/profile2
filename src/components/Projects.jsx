import React from "react";
import Nav from "./Nav";
import "./styles/main.css";

function Projects () {
    return(
        <div className="component-wrapper">
            <div className="projects">
                <h2 className="projects__title">Projects</h2>
                <ul className="projects__list">
                    <li className="projects__item-wrapper">
                        <h3 className="projects__item-title">Happy House</h3>
                        <p className="projects__type">BrainStation Capstone Project</p>
                        <button className="projects__btn">Read More</button>
                    </li>
                </ul>
            </div>
            <Nav/>
        </div>
    )
}

export default Projects;