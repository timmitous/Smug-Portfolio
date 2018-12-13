import React from "react";
import ThePlayer from "./Player.js";
import "./Music.css";
import "./NewStyles.scss";

console.log("Logging from Music");

const TheTitle = () => <h1>Welcome to excellent music</h1>;

const Musics = () => {
  return (
    <div className="WelcomeScreen">
      <div className="Container">
        <TheTitle />
        <ThePlayer />
      </div>
    </div>
  );
};

export default Musics;
