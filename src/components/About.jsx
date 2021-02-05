import React from "react";
import Nav from "./Nav";
import "./styles/main.css";

function About() {
    return(
        <div className="component-wrapper">
            <div className="about">
                <h2 className="about__title">Hello 👋</h2>
                <h2 className="about__title">My name is Monica.</h2>
                <p className="about__p">I'm a fullstack web developer. Highly analytical and detailed oriented. Vancouver, BC-based.</p>
                <p className="about__p">I cultivated curiosity and analytical thinking from a young age mainly by
                reading books. I’m a detail-oriented individual and I like to challenge myself by embarking on new projects to practice self-taught skills.</p>
                <p className="about__p">My professional career started working in employee-focused roles. Now I’m excited to transition to a software development role and showcase my creativity by making a positive impact on people’s lives.</p>
                <p className="about__p">I believe software is key in any industry and provides the opportunity for thrilling career development.</p>
            </div>
            <Nav/>
        </div>
    )
}

export default About;