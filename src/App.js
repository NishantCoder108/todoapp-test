import "./styles.css";
import React, { Component } from "react";
import TodoList from "./Components/TodoList";
import TodoItem from "./Components/TodoItem";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList/>
    </div>
  );
}
