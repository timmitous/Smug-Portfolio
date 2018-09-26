import React, { Component } from 'react';
import '../App.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

export default class Cards extends Component {

      render() {
          return (
           /* <div className="Container">
            <p className="App-intro">
            {console.log('hello guys',allData)}
            <ul>
            {allData.map(item =>
              <li key={item.id}>
              Name: {item.title}
              </li>
            )}
          </ul>

            </p>
            </div>*/

    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>

        );
        }
    }

//You're supposed to fix the cards with allData