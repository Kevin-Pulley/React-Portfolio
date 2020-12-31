import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards" id="cards">
      <h1 className="cards__header">Check Out My Projects!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/SuperheroProject.png"
              text="My Very First Project"
              label="Superhero Project"
              link="https://github.com/Kevin-Pulley/Super-Heroes"
              deployed="https://kevin-pulley.github.io/Super-Heroes/"
            />
            <CardItem
              src="images/Planner.png"
              text="Day Planner"
              label="Day Planner"
              link="https://github.com/Kevin-Pulley/Day-Planner"
              deployed="https://kevin-pulley.github.io/Day-Planner/"
            />
            <CardItem
              src="images/weather.jpg"
              text="My Weather App"
              label="Weather App"
              path="/services"
              link="https://github.com/Kevin-Pulley/Weather-Dashboard"
              deployed="https://kevin-pulley.github.io/Weather-Dashboard"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/SuperheroProject.png"
              text="My Superhero "
              label="Superhero Project"
              path="/services"
              link="https://github.com/Kevin-Pulley/Super-Heroes"
            />
            <CardItem
              src="images/Planner.png"
              text="Day Planner"
              label="Day Planner"
              path="/services"
              link="https://github.com/Kevin-Pulley/Day-Planner"
            />
            <CardItem
              src="images/weather.jpg"
              text="My Weather App"
              label="Weather App"
              path="/services"
              link="https://github.com/Kevin-Pulley/Weather-Dashboard"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
