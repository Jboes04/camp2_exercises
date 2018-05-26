/*import React, { Component } from 'react';
import './App.css';

class DogApp extends Component {
  constructor(props){
    console.log("constructor");
    super(props);
    this.state = {
      gretting: " Hey, There!",
      image: ""
    }
  }
  render() {
    console.log("Render");
    return (
      <div className="App">
        <h2>{this.state.gretting}</h2>
        ? <img src={this.state.image}/>
        :null
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch(`https://random.dog/woof.json`)
    .then(response => response.json())
    .then(resp => this.setState({ image: resp.url}))
  }
}

export default DogApp;*/

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function fetchDog() {
  return fetch('https://random.dog/woof.json')
  .then(data => data.json());
}



class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {url: null};
  }
  componentDidMount() {
    this.refreshDog();
  }

  refreshDog = () => {
    return fetchDog()
      .then(data => this.setState({url : data.url}))
  }

  render() {
    return (

      <div className="App">
        <button onClick={this.refreshDog}>Click here</button>
        <div>
          {this.state.url
            ? <img src={this.state.url} />
            : null
          }
        </div>
      </div>
    );
  }
}

export default DogApp;
