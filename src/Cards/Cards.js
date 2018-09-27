import React, { Component } from "react";
import "../App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default class Cards extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{body}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

//You're supposed to fix the cards with allData
