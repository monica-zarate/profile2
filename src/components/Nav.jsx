import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";
import User from "./User";
import about from "../assets/icons/about.svg";
import edu from "../assets/icons/edu.svg";
import skills from "../assets/icons/tech.svg";
import projects from "../assets/icons/projects.svg";
import contact from "../assets/icons/contact.svg";
import home from "../assets/icons/home.svg";

function Nav () {
    return(
        <div className="nav">
            <User/>
            <ul className="nav__list">
                <li className="nav__item-wrapper">
                    <Link className="nav__link" to={`/`}>
                        <img className="nav__img" src={home} alt=""/>
                        <h3 className="nav__title">Home</h3>
                    </Link>
                </li>
                <li className="nav__item-wrapper">
                    <Link className="nav__link" to={`/about`}>
                        <img className="nav__img" src={about} alt=""/>
                        <h3 className="nav__title">About</h3>
                    </Link>
                </li>
                <li className="nav__item-wrapper">
                    <Link className="nav__link" to={`/education`}>
                        <img className="nav__img" src={edu} alt=""/>
                        <h3 className="nav__title">Education</h3>
                    </Link>
                </li>
                <li className="nav__item-wrapper">
                    <Link className="nav__link" to={`/skills`}>
                        <img className="nav__img" src={skills} alt=""/>
                        <h3 className="nav__title">Skills</h3>
                    </Link>
                </li>
                <li className="nav__item-wrapper">
                    <Link className="nav__link" to={`/projects`}>
                        <img className="nav__img" src={projects} alt=""/>
                        <h3 className="nav__title">Projects</h3>
                    </Link>
                </li>
                <li className="nav__item-wrapper">
                    <Link className="nav__link" to={`/contact`}>
                        <img className="nav__img" src={contact} alt=""/>
                        <h3 className="nav__title">Contact</h3>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;