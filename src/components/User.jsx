import React from "react";
import "./styles/main.css";
import user from "../assets/imgs/user.png"

function User () {
    return(
        <div className="user">
            <img className="user__icon" src={user} alt=""/>
            <h1 className="user__title">Monica Zarate</h1>
            <h2 className="user__subtitle">Web Developer</h2>
        </div>
    )
}

export default User;