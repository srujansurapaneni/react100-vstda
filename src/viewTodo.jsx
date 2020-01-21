import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { InputCard } from "./inputCard";
var inputList;
class ViewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { dispList: [] };
  }

  deletechild(id) {
    this.props.parentDelete(id);
  }

  componentDidMount() {
    this.setState({ dispList: this.props.value.lists });
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ dispList: this.props.value.lists });
    }
  }

  render() {
    inputList = this.state.dispList;
    inputList = inputList.filter(function(item) {
      return item[0];
    });

    return (
      <div>
        {inputList.map(inputList => (
          <li key={inputList.toString()} className={inputList[1]}>
            <p className="p-0 m-0 flex-grow-1">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
              {inputList[0]}
            </p>
            <button>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button id="trash" onClick={() => this.deletechild(inputList[2])}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        ))}
      </div>
    );
  }
}
export default ViewTodo;
