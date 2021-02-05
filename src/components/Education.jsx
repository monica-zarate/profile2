import React from "react";
import Nav from "./Nav";
import "./styles/main.css";

function Education() {
    return(
        <div className="component-wrapper">
            <div className="education">
                <h2 className="education__title">Education</h2>
                <ul className="education__list">
                    <li className="education__list-item">
                        <h3 className="education__h3">Web Developer Diploma</h3>
                        <p className="education__p">BrainStation</p>
                        <p className="education__p">Spring 2020</p>
                    </li>
                    <li className="education__list-item">
                        <h3 className="education__h3">Bachelor's Degree in Psychology</h3>
                        <p className="education__p">U.N.A.M.</p>
                        <p className="education__p">2007 - 2011</p>
                    </li>
                </ul>
                <h2 className="education__title" id="other">Other Courses</h2>
                <ul className="education__list">
                    <li className="education__list-item">
                        <h3 className="education__h3">Yoga Teacher Training 200hrs</h3>
                        <p className="education__p">Semperviva Yoga</p>
                        <p className="education__p">Spring 2018</p>
                    </li>
                    <li className="education__list-item">
                        <h3 className="education__h3">Yin Yoga Teacher Training 40hrs</h3>
                        <p className="education__p">Green Yoga</p>
                        <p className="education__p">Spring 2017</p>
                    </li>
                </ul>
            </div>
            <Nav/>
        </div>
    )
}

export default Education;