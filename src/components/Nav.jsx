import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";
import about from "../assets/icons/about.svg";
import edu from "../assets/icons/edu.svg";
import skills from "../assets/icons/tech.svg";
import projects from "../assets/icons/projects.svg";
import contact from "../assets/icons/contact.svg";
import home from "../assets/icons/home.svg";

function Nav () {
    return(
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <Link className="nav__link" to={`/`}>
                        <img className="nav__icon" src={home} alt=""/>
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__link" to={`/about`}>
                        <img className="nav__icon" src={about} alt=""/>
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__link" to={`/education`}>
                        <img className="nav__icon" src={edu} alt=""/>
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__link" to={`skills`}>
                        <img className="nav__icon" src={skills} alt=""/>
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__link" to={`/projects`}>
                        <img className="nav__icon" src={projects} alt=""/>
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__link" to={`contact`}>
                        <img className="nav__icon" src={contact} alt=""/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;