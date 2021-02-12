import React from "react";
import Nav from "./Nav";
import "./styles/main.css";
import Portfolio from "./portfolio.json";
import Menu from "./Menu";

function Details(props) {
    let path = props.match.params.path;
    for( let i=0; i<Portfolio.length; i++){
        if (path === Portfolio[i].path){
            return(
        <div className="component-wrapper">
            <Nav/>
            <div className="details">
                <h2 className="details__title">{Portfolio[i].title}</h2>
                <h3 className="details__type">{Portfolio[i].type}</h3>
                <img className="details__img" src={Portfolio[i].img} alt=""/>
                <p className="details__p">{Portfolio[i].description}</p>
                <p className="details__p">{Portfolio[i].tech}</p>
                <p className="details__p">{Portfolio[i].challenges}</p>
                <p className="details__p">{Portfolio[i].improve}</p>
                <a className="details__link" href={Portfolio[i].link}>Visit the project's website</a> 
                <a className="details__link" href={Portfolio[i].repo}>Visit the GitHub repository</a>
            </div>
            
        </div>
    )
        }
    }
    return(
                <Menu/>
            )
    
    
}

export default Details;