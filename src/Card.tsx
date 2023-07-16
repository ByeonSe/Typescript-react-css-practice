import React from "react";
import "./Card.css";

interface CardProp {
  author: string;
  title: string;
  thumbnail: string;
}

function Card(cardprop: CardProp) {

  return (
    <div className="wrapper" data-testid="card-wrapper">
      <div className="thumbnail">
        <img src={`${cardprop.thumbnail}`} alt="thumbnail" width="500" height="600" />
      </div>
      <div className="description">
        <h1>{cardprop.title}</h1>
        <h2>{cardprop.author}</h2>
      </div>
    </div>
  );
}

export default Card;