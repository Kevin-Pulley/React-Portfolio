import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Cards from "./components/Cards/Cards"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Cards}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
