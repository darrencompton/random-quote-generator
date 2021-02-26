import React, { Component } from "react";
import "./App.css";

import "./App.css";
import data from "./quotes.json";
class App extends Component {
  state = { index: 1 };
  componentDidMount() {
    this.setState({ index: this.getRandomIndex() });
  }
  getRandomIndex() {
    return Math.floor(Math.floor(Math.random() * data.length));
  }

  render() {
    const link =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(data[this.state.index].Quote) +
      "&via=" +
      encodeURIComponent(data[this.state.index].Author);
    console.log(link);
    return (
      <div id="wrapper">
        <div id="quotebox">
          <div id="text">{data[this.state.index].Quote}</div>
          <div id="author">{data[this.state.index].Author}</div>
          <div id="actions">
            <button
              style={{ marginLeft: "30px" }}
              onClick={() => this.setState({ index: this.getRandomIndex() })}
            >
              New Quote
            </button>

            <a href={link} target="_blank" rel="noreferrer">
              <button style={{ margin: "30px" }}>Tweet this</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
