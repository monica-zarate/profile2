import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./styles/main.css";
import Portfolio from "./portfolio.json";

function Projects () {
    return(
        
        <div className="component-wrapper">
            <Nav/>
            <div className="projects">
                <h2 className="projects__title">Projects</h2>
                <ul className="projects__list">
                    {Portfolio.map((item)=>(
                    <li className="projects__item-wrapper">
                        <h3 className="projects__item-title">{item.title}</h3>
                        <p className="projects__type">{item.type}</p>
                        <Link className="projects__btn" to ={`/projects/${item.path}`}>Read More</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects;