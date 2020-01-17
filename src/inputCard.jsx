import React, { Component } from "react";

class InputCard extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDownVal: "Select a Priority" };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleEvent(e) {
    console.log("new select");
  }

  handleSelect() {
    // what am I suppose to write in there to get the value?
    console.log("this selected");
  }
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#a9a9a9" }}>
            Add New Todo
          </div>
          <div className="card-body">
            <div>
              <label>I want to..</label>
              <br />
              <input type="text" name="inputTodo" />
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
                  onClick={this.handleSelect}
                  onChange={this.handleEvent}
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
              onClick={this.handleSelect}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default InputCard;
