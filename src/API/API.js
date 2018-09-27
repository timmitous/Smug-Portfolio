import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import '../App.css';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const APILink = 'https://jsonplaceholder.typicode.com/posts';

export default class API extends Component {

  constructor(props){
    super(props);

    this.state = {
      allData: [],
      isLoaded: false,
    };
  }

  componentDidMount() {

      console.log('Tryna fetch')
      axios.get(APILink)
      .catch(error => console.log('Unable to receive data', error))
      .then(response => {console.log('Received data', response.data[0]);
                         this.setState({
                            isLoaded: true,
                            allData: response.data
                          })
                        });
      }

      render() {
        const { isLoaded, allData } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else{
          return (
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
            <ul>
            {allData.map(item =>
              <li key={item.id}>
              Name: {item.title}
              </li>
            )}
          </ul>
        );
        }

    
    }
}

//You're supposed to fix the cards with allData