import React, { Component } from "react";
import "./Results.css";
import Card from "../Cards/Cards";
import axios from "axios";
import { Container, Row } from "reactstrap";

const APILink = "https://jsonplaceholder.typicode.com/posts";

export default class Results extends Component {
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
        //console.log("Received data", res.data[0]);
        this.setState({
          isLoaded: true,
          allData: res.data
        });
      });
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return "Loading...";
    } else {
      let theCards = this.state.allData.map(allData => {
        return (
          <Card
            key={allData.id}
            id={allData.id}
            title={allData.title}
            body={allData.body}
          />
        );
      });
      return (
        <Container>
          <Row>{theCards}</Row>
        </Container>
      );
    }
  }
}
