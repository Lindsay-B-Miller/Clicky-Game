import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 title">{props.children}</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        <hr className="my-4"></hr>
        <p className="lead">Score: {props.count} | High Score: {props.highScore}</p>
        <p className="lead text-center font-weight-bold text-info">{props.result}</p>
      </div>
    </div>
  )
}

export default Title;
