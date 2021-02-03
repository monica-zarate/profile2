import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
