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
import image2 from "../images/flower2.jpg";
import image3 from "../images/flower3.jpg";

let imagee1 = [image1, image2, image3];
export default class Cards extends Component {
  render() {
    const { title, body, id, number } = this.props;
    console.log(number);
    //console.log(this.props);
    return (
      <Col sm="4" key={id}>
        <Card>
          <CardImg
            top
            width="100%"
            src={imagee1[number]}
            alt="Card image cap"
          />
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
