import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="text-center">
        <h1>Todo List App - React</h1>
        <small className="text-muted">
          A Things To Do list App using React.Js to help you Remember your
          Todo's
        </small>
      </header>
      <br />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
