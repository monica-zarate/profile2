import React from "react";
import "./styles/main.css";
import Nav from "./Nav";
import mail from "../assets/icons/mail.svg";
import linkedIn from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import tw from "../assets/icons/twitter.svg";

function Contact() {
    return(
        <div className="component-wrapper">
            <Nav/>
            <div className="contact">
                <h2 className="contact__title">Get in touch</h2>
                <ul className="contact__list">
                    <li className="contact__list-item">
                        <a href="mailto:hello@monicazarate.com" className="contact__link">
                            <img src={mail} alt="email icon" className="contact__icon"/>
                            <p className="contact__p">hello@monicazarate.com</p>
                        </a>
                        
                    </li>
                    <li className="contact__list-item">
                        <a href="https://www.linkedin.com/in/monica-zarate/" target="_blank" rel="noreferrer" className="contact__link">
                            <img src={linkedIn} alt="linkedin icon" className="contact__icon"/>
                            <p className="contact__p">LinkedIn</p>
                        </a>
                        
                    </li>
                    <li className="contact__list-item">
                        <a href="https://github.com/monicazhazil" target="_blank" rel="noreferrer" className="contact__link">
                            <img src={github} alt="github icon" className="contact__icon"/>
                            <p className="contact__p">GitHub</p>
                        </a>
                        
                    </li>
                    <li className="contact__list-item">
                        <a href="https://twitter.com/monicazhazil" target="_blank" rel="noreferrer" className="contact__link">
                            <img src={tw} alt="twitter icon" className="contact__icon"/>
                            <p className="contact__p">Twitter</p>
                        </a>
                        
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Contact;