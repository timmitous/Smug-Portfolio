import React from "react";
import "./Music.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";
import paul from "../images/paulie.jpg";
import ole from "../music/01-Ole.mp3";

console.log("Logging from Facts");

const Facts = () => (
  <div className="Container">
    <div>
      <h1>Welcome to excellent music</h1>
    </div>
  </div>
);

const Musics = () => {
  return (
    <div className="Container">
      <Col sm="4" key="1">
        <Card>
          <CardImg top width="100%" src={paul} alt="Card image cap" />
          <CardBody>
            <CardTitle>Paul Burnley</CardTitle>
            <CardSubtitle>Enjoy</CardSubtitle>
            <CardText>Paul Burnley and the Fourth Kingdom</CardText>
            <a href={ole} download>
              Get it on your device here mate!
            </a>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Musics;
