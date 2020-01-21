import React, { Component } from "react";
import ViewTodo from "./viewTodo";

var todo_list = [[]];

class InputCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVal: "Select a Priority",
      inputVal: "",
      id: "",
      lists: [[]]
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.viewList = this.viewList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    window.id = 0;
  }

  handleEvent(e) {
    this.setState({ inputVal: e.target.value, id: window.id++ });
  }

  addEvent() {
    var todo = this.state.inputVal;
    var id = this.state.id;
    if (todo_list.length === 1) {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-success";
    } else {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-danger";
    }
    todo_list.unshift([todo, classColor, id]);
    this.setState({ lists: todo_list });
    var filteredAry = todo_list.filter(function(e) {
      return e[0] !== "hi";
    });
    todo_list = filteredAry;
    this.setState({ lists: filteredAry });
    console.log("this filtered array", filteredAry);
  }

  viewList() {
    return (
      <ViewTodo value={this.state} parentDelete={cid => this.deleteItem(cid)} />
    );
  }

  deleteItem(cid) {
    console.log("parent delete", cid);
    var filteredAry = todo_list.filter(function(e) {
      return e[2] !== cid;
    });
    todo_list = filteredAry;
    this.setState({ lists: filteredAry });
    console.log("deleted filtered array", filteredAry);
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
              <this.viewList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputCard;
