import React from "react";
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
import paul from "../../images/paulie.jpg";
import ole from "../../music/01-Ole.mp3";

console.log("Logging from Facts");

const TheTitle = () => <h1>Welcome to excellent music</h1>;

const Musics = () => {
  return (
    <div className="WelcomeScreen">
      <div className="Container">
        <TheTitle />
        <Player />
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

// COMPONENTS

// Player
const Player = () => {
  //works
  return (
    <div className="Player">
      <div className="Background" />
      <div className="Header">
        <div className="Title">Now playing</div>
      </div>
      <div className="Artwork" />
      <TrackInformation />
      <Scrubber />
      <Controls />
      <Timestamps />
      <audio>
        <source src={ole} />
      </audio>
    </div>
  );
};

const TrackInformation = () => {
  //works
  return (
    <div className="TrackInformation">
      <div className="Name">We Were Young</div>
      <div className="Artist">Odesza</div>
      <div className="Album">Summer's Gone (2012)</div>
    </div>
  );
};

const Scrubber = () => {
  //works
  return (
    <div className="Scrubber">
      <div className="Scrubber-Progress" />
    </div>
  );
};

const Controls = () => {
  //works
  return (
    <div className="Controls">
      <div className="Button">
        <i className="fa fa-fw fa-play" />
      </div>
    </div>
  );
};

const Timestamps = () => {
  return (
    <div className="Timestamps">
      <div className="Time Time--current">0</div>
      <div className="Time Time--total">192</div>
    </div>
  );
};

//CSS code

/*.Player {
  background: bisque;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 10px -5px black;
  height: 667px;
  position: relative;
  width: 375px;
  margin: auto;
  margin-bottom: 3em;
}

.Background {
  width: 150%;
  height: 150%;
  position: absolute;
  top: -25%;
  left: -25%;
  background: url(https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg);
  background-size: cover;
  background-position: center center;
  opacity: 0.2;
  filter: blur(10px);
}

.Title {
  width: 300px;
  margin: 50px auto;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
}

.Artwork {
  width: 300px;
  height: 300px;
  background: url(https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg);
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  margin: auto;
  box-shadow: 0 5px 10px -5px black;
  position: relative;
}

.TrackInformation {
  width: 300px;
  margin: 30px auto;
  text-align: center;
  position: relative;
}

.Name {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 300;
}

.Artist {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 500;
}

.Album {
  font-size: 12px;
  opacity: 0.5;
}

.Scrubber {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  opacity: 0.2;
  transition: opacity 0.25s ease;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.Scrubber:active {
  opacity: 1;
}

.Scrubber-Progress {
  height: 100%;
  width: 0%;
  transition: width 0.25s ease;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.Timestamps {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 2;
  width: 100%;
}

.Time {
  font-size: 12px;
}

.Controls {
  position: absolute;
  bottom: 8%;
  pointer-events: none;
  margin: auto;
  left: 0;
  right: 0;
}

.Button {
  height: 60px;
  width: 60px;
  border: 2px solid white;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 5px 5px 0px black;
  margin: auto;
  pointer-events: all;
}
.Button:active {
  transform: scale(0.98);
  background: white;
}

.fa-play:before {
  content: "\f04b";
}
 */
