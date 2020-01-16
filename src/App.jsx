import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h2>Very Simple Todo App</h2>
          <hr />
        </header>

        <div className="row">
          <div className="col-4">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#a9a9a9" }}
              >
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
                    >
                      Select a Priority
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-footer"
                style={{ backgroundColor: "#a9a9a9" }}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#a9a9a9" }}
              >
                View Todos
              </div>
              <div className="card-body">
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action list-group-item-success"
                  >
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                    A simple success list group item
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </a>

                  <a
                    href="#"
                    className="list-group-item list-group-item-action list-group-item-danger"
                  >
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                    A simple danger list group item
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action list-group-item-warning"
                  >
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                    A simple warning list group item
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
