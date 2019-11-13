import React from "react";
import "./style.css";


function ImageCard(props) {
  return (
    <div className="imgContainer">
      <img alt={props.id} key={props.id} src={props.image} data-clicked={props.clicked} onClick={() => props.handleClick(props.id)} />
    </div>
  );
}

export default ImageCard;
