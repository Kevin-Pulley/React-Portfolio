import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route basename="/react-portfolio" path="/" exact component={Home} />
        <Route
          basename="/react-portfolio"
          path="/projects"
          exact
          component={Cards}
        />
        <Route
          basename="/react-portfolio"
          path="/about"
          exact
          component={About}
        />
        <Route
          basename="/react-portfolio"
          path="/contact"
          exact
          component={Footer}
        />
        
      </Router>
    </>
  );
}

export default App;
