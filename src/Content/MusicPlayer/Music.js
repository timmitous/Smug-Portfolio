import React from "react";
import paul from "../../images/paulie.jpg";
import ole from "../../music/01-Ole.mp3";
import ThePlayer from "./Player.js";
import "./Music.css";
import "./NewStyles.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

console.log("Logging from Music");

const TheTitle = () => <h1>Welcome to excellent music</h1>;

const Musics = () => {
  return (
    <div className="WelcomeScreen">
      <div className="Container">
        <TheTitle />
        <ThePlayer />
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
    </div>
  );
};

export default Musics;
