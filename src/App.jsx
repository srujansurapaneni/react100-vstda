import React, { Component } from "react";
import InputCard from "./inputCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <header>
          <h2>Very Simple Todo App</h2>
          <hr />
        </header>

        <InputCard />
      </div>
    );
  }
}

export default App;
