import React, { Component } from "react";
import "../App.css";
import Card from "../Cards/Cards";
import axios from "axios";

const APILink = 'https://jsonplaceholder.typicode.com/posts';

export default class API extends Component {

  constructor(props){
    super(props);

    this.state = {
      allData: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    console.log("Tryna fetch");
    axios
      .get(APILink)
      .catch(error => console.log("Unable to receive data", error))
      .then(res => {
        // console.log("Received data", res.data[0]);
        console.log(res.data);
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
      return (
        <div>
          {this.state.allData.map(allData => {
            return (
              <Card
                key={allData.id}
                title={allData.title}
                body={allData.body}
              />
            );
          })}
        </div>

        // <div className="App">
        //   <Header />
        //   <div className="Container">
        //   <p className="App-intro">
        //   {console.log('hello guys',allData)}
        //   <ul>
        //   {allData.map(item =>
        //     <li key={item.id}>
        //     Name: {item.title}
        //     </li>
        //   )}
        // </ul>

        //   </p>
        //   </div>
        //   <Footer />
        // </div>
      );
    }
  }
}

//You're supposed to fix the cards with allData

