import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";
import User from "./User";
import about from "../assets/icons/about.svg";
import edu from "../assets/icons/edu.svg";
import skills from "../assets/icons/tech.svg";
import projects from "../assets/icons/projects.svg";
import contact from "../assets/icons/contact.svg";

function Menu () {
    return(
        
        <div className="menu">
            <User/>
            <ul className="menu__list">
                <li className="menu__item-wrapper">
                    <Link className="menu__link" to={`/`}>
                        <img className="menu__img" src={about} alt=""/>
                        <h3 className="menu__title">About</h3>
                    </Link>
                </li>
                <li className="menu__item-wrapper">
                    <Link className="menu__link" to={`/education`}>
                        <img className="menu__img" src={edu} alt=""/>
                        <h3 className="menu__title">Education</h3>
                    </Link>
                </li>
                <li className="menu__item-wrapper">
                    <Link className="menu__link" to={`/skills`}>
                        <img className="menu__img" src={skills} alt=""/>
                        <h3 className="menu__title">Skills</h3>
                    </Link>
                </li>
                <li className="menu__item-wrapper">
                    <Link className="menu__link" to={`/projects`}>
                        <img className="menu__img" src={projects} alt=""/>
                        <h3 className="menu__title">Projects</h3>
                    </Link>
                </li>
                <li className="menu__item-wrapper">
                    <Link className="menu__link" to={`/contact`}>
                        <img className="menu__img" src={contact} alt=""/>
                        <h3 className="menu__title">Contact</h3>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;