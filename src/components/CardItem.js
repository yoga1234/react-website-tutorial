import React from "react";
import { Link } from "react-router-dom";

function CardItem() {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <imr src="/" alt="Traveling" className="cards__item__img"></imr>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text"></h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
