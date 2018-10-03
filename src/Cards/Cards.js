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

export default class Cards extends Component {
  render() {
    const { title, body, id } = this.props;
    //console.log(this.props);
    return (
      <Col sm="4" key={id}>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
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
