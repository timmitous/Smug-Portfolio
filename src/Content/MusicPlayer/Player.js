import React from "react";
import "./NewStyles.scss";
import ole from "../../music/01-Ole.mp3";
//import paul from "../../images/paulie.jpg";

console.log("Logging from Player");

class MusicPlayer extends React.Component {
  render() {
    return <Player />;
  }
}

// Player
class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "We Were Young",
      artist: "Odesza",
      album: "Summer's Gone",
      year: 2012,
      artwork:
        "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
      duration: 192,
      source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    };

    this.play = {
      playStatus: "play",
      currentTime: 0
    };
  }

  render() {
    console.log(this.state, "Tracks");
    console.log(this.play.currentTime, "currenttime");
    //works
    return (
      <div className="Player">
        <div
          className="Background"
          style={{ backgroundImage: "url(" + this.state.artwork + ")" }}
        />
        <div className="Header">
          <div className="Title">Now playing</div>
        </div>
        <div
          className="Artwork"
          style={{ backgroundImage: "url(" + this.state.artwork + ")" }}
        />
        <TrackInformation
          trackName={this.state.name}
          artistName={this.state.artist}
          albumName={this.state.album}
        />
        <Scrubber />
        <Controls />
        <Timestamps
          duration={this.state.duration}
          currentTime={this.play.currentTime}
        />
        <audio>
          <source src={ole} />
        </audio>
      </div>
    );
  }
}

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

class Timestamps extends React.Component {
  render() {
    console.log(this.props, "should display duration and currenttime");
    return (
      <div className="Timestamps">
        <div className="Time Time--current">{this.props.currentTime}</div>
        <div className="Time Time--total">{this.props.duration}</div>
      </div>
    );
  }
}

export default MusicPlayer;

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
