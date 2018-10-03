import React, { Component } from "react";
import Header from "./Header/Header.js";
import "./App.css";
import Results from "./API/Results.js";
import Footer from "./Footer/Footer.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Container">
          <Results />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
