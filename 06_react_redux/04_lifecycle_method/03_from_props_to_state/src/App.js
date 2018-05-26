import React, { Component } from 'react';
import './App.css';
import Book from "./Book"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: "978059651774",
      text: ""
    }
  }
  handleChange = (event) => {
    this.setState({text: event.target.value});
  }
  handleSearch = (text) => {
    this.setState({isbn: text.target.value})
    //console.log(" button click is :" + this.setState({text: text}));

  }
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.isbn} onChange={this.handleChange} />
        <button onClick={this.handleSearch}>Search</button>
        <Book isbn={this.state.isbn} />
      </div>
    );
  }
}

export default App;
