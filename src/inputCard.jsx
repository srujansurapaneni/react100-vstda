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
      lists: [[]],
      editEnabled: false
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.viewEdit = this.viewEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.viewList = this.viewList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    window.id = 0;
  }

  handleEvent(e) {
    this.setState({ inputVal: e.target.value, id: window.id++ });
  }

  handleEditEvent(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleDropdown(e) {
    this.setState({ dropDownVal: e.target.text });
  }

  addEvent() {
    var todo = this.state.inputVal;
    var id = this.state.id;
    var priority = this.state.dropDownVal;
    if (priority === "High") {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-danger";
    } else if (priority === "Medium") {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-warning";
    } else {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-success";
    }
    todo_list.unshift([todo, classColor, id]);
    this.setState({ lists: todo_list });
    var filteredAry = todo_list;
    todo_list = filteredAry;
    this.setState({ lists: filteredAry });
  }

  viewEdit() {
    return (
      <div>
        <div>
          <label>Description</label>
          <br />
          <textarea
            className="update-todo-text"
            type="text"
            name="inputTodo"
            onChange={this.handleEditEvent}
          />
        </div>
        <div>
          <label>Priority</label>
          <br />
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle update-todo-priority"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.dropDownVal}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item update-todo-priority"
                href="#"
                onClick={this.handleDropdown}
              >
                Low
              </a>
              <a
                className="dropdown-item update-todo-priority"
                href="#"
                onClick={this.handleDropdown}
              >
                Medium
              </a>
              <a
                className="dropdown-item update-todo-priority"
                href="#"
                onClick={this.handleDropdown}
              >
                High
              </a>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success update-todo"
          onClick={() => this.saveEdit()}
        >
          Save
        </button>
      </div>
    );
  }

  viewList(props) {
    return (
      <div>
        {props.value.editEnabled ? (
          <div>
            <div className="card-body">
              <this.viewEdit />
            </div>
            <ViewTodo
              value={this.state}
              parentDelete={cid => this.deleteItem(cid)}
              parentEdit={cid => this.editItem(cid)}
            />
          </div>
        ) : (
          <ViewTodo
            value={this.state}
            parentDelete={cid => this.deleteItem(cid)}
            parentEdit={cid => this.editItem(cid)}
          />
        )}
      </div>
    );
  }

  deleteItem(cid) {
    var filteredAry = todo_list.filter(function(e) {
      return e[2] !== cid;
    });
    todo_list = filteredAry;
    this.setState({ lists: filteredAry });
  }

  editItem(cid) {
    this.setState({ editEnabled: true, id: cid });
  }

  saveEdit() {
    let i;
    var priority = this.state.dropDownVal;
    if (priority === "High") {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-danger";
    } else if (priority === "Medium") {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-warning";
    } else {
      var classColor =
        "list-group-item d-flex justify-content-between list-group-item-action list-group-item-success";
    }
    for (i = 0; i < todo_list.length; i++) {
      if (todo_list[i][2] === this.state.id) {
        todo_list[i][0] = this.state.inputVal;
        todo_list[i][1] = classColor;
      } else {
      }
    }
    this.setState({ editEnabled: false });
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
                    className="btn btn-light dropdown-toggle create-todo-priority"
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
                    <a
                      className="dropdown-item create-todo-priority"
                      href="#"
                      onClick={this.handleDropdown}
                    >
                      Low
                    </a>
                    <a
                      className="dropdown-item create-todo-priority"
                      href="#"
                      onClick={this.handleDropdown}
                    >
                      Medium
                    </a>
                    <a
                      className="dropdown-item create-todo-priority"
                      href="#"
                      onClick={this.handleDropdown}
                    >
                      High
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer" style={{ backgroundColor: "#a9a9a9" }}>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block create-todo"
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
              <this.viewList value={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputCard;
