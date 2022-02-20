import React, { Component } from "react";
import "./component.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.input = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // console.log(this.input.current.value);

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(this.input.current.value),
      };
    });
  }

  removeHandler(index) {
    this.state.items.splice(index, 1);
    this.setState(() => {
      return {
        items: this.state.items,
      };
    });
  }

  render() {
    // console.log(this.state);

    return (
      <div className="container-fluid">
        <form>
          <label>
            <input ref={this.input} type="text" />
          </label>

          <button type="submit" onClick={this.handleSubmit}>
            Button
          </button>
        </form>
        {this.state.items.map((value, index, arr) => (
          <ul key={index}>
            <li>
              {value} 
            </li>

            <button onClick={() => this.removeHandler(index)}>Delete</button>
          </ul>
        ))}
      </div>
    );
  }
}

export default TodoItem;
