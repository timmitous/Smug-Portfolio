import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import axios from 'axios';

class App extends Component {
    componentDidMount() {
      console.log('Tryna fetch')
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .catch(error => console.log('Unable to receive data', error))
      .then(response => console.log('Received data', response.data[0]));
     
      }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> -Useless shit*/}
          <h1 className="App-title">Moderna{/*SOLVE VERTICAL ALIGNMENT*/}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}
export default App;






























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