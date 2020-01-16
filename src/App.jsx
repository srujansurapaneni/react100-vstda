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

              <div className="list-group">
                <li className="list-group-item d-flex justify-content-between list-group-item-action list-group-item-success">
                  <p className="p-0 m-0 flex-grow-1">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                    First item
                  </p>
                  <button>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-between list-group-item-action list-group-item-danger">
                  <p className="p-0 m-0 flex-grow-1">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                    Second item
                  </p>
                  <button>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-between list-group-item-action list-group-item-warning">
                  <p className="p-0 m-0 flex-grow-1">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                    Third item
                  </p>
                  <button>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
