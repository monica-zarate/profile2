import React from "react";
import "./styles/main.css";
import Nav from "./Nav";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import sass from "../assets/icons/sass.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import mysql from "../assets/icons/mysql.svg";

function Skills () {
    return(
        <div className="component-wrapper">
            <div className="skills">
                <h2 className="skills__title">Skills</h2>
                <ul className="skills__list">
                    <li className="skills__list-item">
                        <img className="skills__icon" src={html} alt=""/>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" id="css" src={css} alt=""/>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={sass} alt=""/>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={js} alt=""/>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={react} alt=""/>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={node} alt=""/>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={mysql} alt=""/>
                    </li>
                </ul>
            </div>
            <Nav/>
        </div>
    )
}

export default Skills;