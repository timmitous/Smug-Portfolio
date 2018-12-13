import React, { Component } from "react";
import "./NewStyles.scss";
import air from "../../music/bach/air.mp3";
import bach from "../../images/Johann_Sebastian_Bach.jpg";

console.log("Logging from Player");

class MusicPlayer extends Component {
  render() {
    return <Player />;
  }
}

// Player
class Player extends Component {
  constructor(props) {
    super(props);

    this.audio = new Audio(air);

    this.infos = {
      name: "Air on the G String",
      artist: "Johann Sebastian Bach",
      album: "Orchestral Suite No. 3 in D major",
      year: "Early 1700's",
      artwork: bach,
      duration: 338,
      source: air
    };

    this.state = {
      isPlaying: true,
      currentTime: 0
    };

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    this.setState({ isPlaying: !this.state.isPlaying });
    console.log(this.state, "thisplay");
    console.log(this.state.isPlaying, "isplayin");
    this.whenPlaying();
  }

  whenPlaying() {
    if (this.state.isPlaying) {
      this.audio.play();

      this.intervalId = setInterval(() => {
        let currentTime = this.audio.currentTime;
        let duration = this.infos.duration;

        // Calculate percent of song
        let percent = (currentTime / duration) * 100 + "%";
        this.updateScrubber(percent);
        this.updateTime(currentTime);
      }, 100);
    } else {
      this.audio.pause();
      clearInterval(this.intervalId);
    }
  }

  updateScrubber(percent) {
    let innerScrubber = document.querySelector(".Scrubber-Progress");
    innerScrubber.style["width"] = percent;
  }

  updateTime(timestamp) {
    timestamp = Math.floor(timestamp);
    console.log(timestamp, "timestamp");
    this.setState({ currentTime: timestamp });
  }

  render() {
    return (
      <div className="Player">
        <div
          className="Background"
          style={{ backgroundImage: "url(" + this.infos.artwork + ")" }}
        />
        <div className="Header">
          <div className="Title">Now playing</div>
        </div>
        <div
          className="Artwork"
          style={{ backgroundImage: "url(" + this.infos.artwork + ")" }}
        />

        <TrackInformation
          trackName={this.infos.name}
          artistName={this.infos.artist}
          albumName={this.infos.album}
        />
        <Scrubber />
        <Controls isPlaying={this.state.playStatus} onClick={this.togglePlay} />
        <TimeStamps
          duration={this.infos.duration}
          currentTime={this.state.currentTime}
        />
      </div>
    );
  }
}

const TrackInformation = props => {
  //works
  return (
    <div className="TrackInformation">
      <div className="Name">{props.trackName}</div>
      <div className="Artist">{props.artistName}</div>
      <div className="Album">{props.albumName}</div>
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

class Controls extends Component {
  render() {
    let classNames;
    if (this.props.isPlaying === false) {
      classNames = "fa f a-fw fa-pause";
    } else {
      classNames = "fa fa-fw fa-play";
    }

    return (
      <div className="Controls">
        <div className="Button" onClick={this.props.onClick}>
          <i className={classNames} />
        </div>
      </div>
    );
  }
}

class TimeStamps extends Component {
  render() {
    //console.log(this.props, "should display duration and currenttime");
    return (
      <div className="Timestamps">
        <div className="Time Time--current">
          {ConvertTime(this.props.currentTime)}
        </div>
        <div className="Time Time--total">
          {ConvertTime(this.props.duration)}
        </div>
      </div>
    );
  }
}

const ConvertTime = props => {
  let minutes = Math.floor(props / 60);
  let seconds = props - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let timestamp = minutes + ":" + seconds;
  //console.log(props, "timestampening");
  return timestamp;
};

export default MusicPlayer;
