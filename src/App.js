import React, { Component } from "react";
import Header from "./Header/Header.js";
import { Container } from "reactstrap";
import "./App.css";
import API from "./API/API.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }

  render() {
    return (
      <Container>
        <Header />
        <API />
      </Container>
    );
    }

    
  }
export default App;


//API

//To get started, edit <code>src/App.js</code> and save to reload.

//Used for fetch api
/*fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json[0]))*/


/*{
          console.log('Fugg man')
          console.log(results);
          console.log('redux')
          console.log(results.json());
          return results;
        }).then(data => {
          console.log(data)
          return data;
          //let whatever = data.results.map((url))
      }*/


/* fetch('http://modernacodechallenge.azurewebsites.net/api/insurances',{mode:'no-cors'})
      .then(response => console.log(response))
      .then(json => console.log(json))*/

