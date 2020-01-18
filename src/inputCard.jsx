import React, { Component } from "react";
import ViewTodo from "./viewTodo";

class InputCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVal: "Select a Priority",
      inputVal: "enter todo",
      id: "123"
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
    window.id = 0;
  }

  handleEvent(e) {
    this.setState({ inputVal: e.target.value, id: window.id++ });
  }

  addEvent() {
    const todo = { text: this.state.inputVal, id: this.state.id };
    console.log(todo);
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#a9a9a9" }}>
              Add New Todo
            </div>
            <div className="card-body">
              <div>
                <label>I want to..</label>
                <br />
                <textarea
                  className="create-todo-text"
                  type="text"
                  name="inputTodo"
                  onChange={this.handleEvent}
                />
              </div>
              <div>
                <label>How much of a priority is this?</label>
                <br />
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.dropDownVal}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Low
                    </a>
                    <a className="dropdown-item" href="#">
                      Medium
                    </a>
                    <a className="dropdown-item" href="#">
                      High
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer" style={{ backgroundColor: "#a9a9a9" }}>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={this.addEvent}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#a9a9a9" }}>
              View Todos
            </div>

            <div className="list-group">
              <ViewTodo inputVal={this.state.inputVal} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputCard;
