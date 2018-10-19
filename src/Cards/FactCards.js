import React, { Component } from "react";
import "../API/Results.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";
import image1 from "../images/flower1.jpg";

export default class Cards extends Component {
  render() {
    const { title, body, id } = this.props;
    //console.log("number");
    return (
      <Col sm="4" key={id}>
        <Card>
          <CardImg top width="100%" src={image1} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{id}</CardSubtitle>
            <CardText>{body}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

//You're supposed to fix the cards with allData
