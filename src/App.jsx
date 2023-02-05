import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo List App - React</h1>
      <p>
        A Things To Do list App using React.Js to help you Remember your Todo's
      </p>
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
