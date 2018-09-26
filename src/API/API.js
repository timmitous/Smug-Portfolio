import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import '../App.css';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import axios from 'axios';

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
          <div className="App">
            <Header />
            <div className="Container">
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
            </div>
            <Footer />
          </div>
        );
        }

    
    }
}

//You're supposed to fix the cards with allData