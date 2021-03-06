import React, { Component } from "react";
import "./Results.css";
import Card from "../Cards/Cards";
import { Container, Row } from "reactstrap";

console.log("Logging from Star Trek");

export default class FactStarTrek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    console.log("Attempting to fetch API");
    axios
      .get(APILink)
      .catch(error => console.log("Unable to receive data", error))
      .then(res => {
        this.setState({
          isLoaded: true,
          allData: res.data
        });
      });
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div className="Container">
          <p>Loading Cards...</p>
        </div>
      );
    } else {
      let counter = -1;
      let theCards = this.state.allData.map(allData => {
        if (counter <= 1) {
          counter++;
        } else {
          counter = 0;
        }
        return (
          <Card
            number={counter}
            key={allData.id}
            id={allData.id}
            title={allData.title}
            body={allData.body}
          />
        );
      });
      return (
        <div className="Container">
          <Container>
            <Row>{theCards}</Row>
          </Container>
        </div>
      );
    }
  }
}
