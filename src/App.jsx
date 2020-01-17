import React, { Component } from "react";
import InputCard from "./inputCard";
import ViewTodo from "./viewTodo";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h2>Very Simple Todo App</h2>
          <hr />
        </header>

        <div className="row">
          <InputCard />
          <ViewTodo />
        </div>
      </div>
    );
  }
}

export default App;
