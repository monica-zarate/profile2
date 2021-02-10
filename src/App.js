import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Menu} exact />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} exact />
        <Route path="/projects/:path" component={Details} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <div className="App__circle1"></div>
      <div className="App__circle2"></div>
    </div>
  );
}

export default App;
