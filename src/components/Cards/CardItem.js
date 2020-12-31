import React from "react";
//import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <a href={props.deployed}>
            <figure
              className="cards__item__pic-wrap"
              data-category={props.label}
            >
              <img
                src={props.src}
                alt="project pic"
                className="cards__item__img"
              />
            </figure>
          </a>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <form className="link__buttons">
              <button className="gitbutton" formAction={props.deployed}>
                <i class="fab fa-github"></i> Deployed
              </button>
              <button className="gitbutton"  formAction={props.link}>
                <i class="fab fa-github"></i> Repo
              </button>
            </form>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
