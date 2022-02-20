import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./component.css";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
