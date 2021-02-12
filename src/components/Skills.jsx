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
            <Nav/>
            <div className="skills">
                <h2 className="skills__title">Skills</h2>
                <ul className="skills__list">
                    <li className="skills__list-item">
                        <img className="skills__icon" src={html} alt=""/>
                        <p className="skills__p">HTML5</p>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" id="css" src={css} alt=""/>
                        <p className="skills__p">CSS3</p>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={sass} alt=""/>
                        <p className="skills__p">SASS</p>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={js} alt=""/>
                        <p className="skills__p">Javascript</p>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={react} alt=""/>
                        <p className="skills__p">React</p>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={node} alt=""/>
                        <p className="skills__p">Node.js / Express</p>
                    </li>
                    <li className="skills__list-item">
                        <img className="skills__icon" src={mysql} alt=""/>
                        <p className="skills__p">MySQL</p>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Skills;