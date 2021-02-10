import React from "react";
import Nav from "./Nav";
import "./styles/main.css";
import Portfolio from "./portfolio.json";

function Details(props) {
    let path = props.match.params.path;
    for( let i=0; i<Portfolio.length; i++){
        if (path === Portfolio[i].path){
            return(
        <div className="component-wrapper">
            <div className="details">
                <h2 className="details__title">{Portfolio[i].title}</h2>
                <h3 className="details__type">{Portfolio[i].type}</h3>
                <img className="details__img" src={Portfolio[i].img} alt=""/>
                <p className="details__p">{Portfolio[i].description}Description</p>
                <p className="details__p">{Portfolio[i].tech}Tech Stack</p>
                <p className="details__p">{Portfolio[i].challenges}Challenges</p>
                <p className="details__p">{Portfolio[i].improve}To improve</p>
                <a className="details__link" href={Portfolio[i].link}>Link to project</a> 
                <a className="details__link" href={Portfolio[i].repo}>GitHub repo</a>
            </div>
            <Nav/>
        </div>
    )
        }
    }
    return(
                <Nav/>
            )
    
    
}

export default Details;