import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Cards from "./components/Cards/Cards"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Cards}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Footer}/>
        </Switch>

      </Router>
    </>
  );
}

export default App;
