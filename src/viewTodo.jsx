import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ViewTodo extends Component {
  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between list-group-item-action list-group-item-success">
          <p className="p-0 m-0 flex-grow-1">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            {this.props.inputVal}
          </p>
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </li>
        {/* <li className="list-group-item d-flex justify-content-between list-group-item-action list-group-item-danger">
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
            </li> */}
        {/* <li className="list-group-item d-flex justify-content-between list-group-item-action list-group-item-warning">
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
            </li> */}
      </div>
    );
  }
}
export default ViewTodo;
