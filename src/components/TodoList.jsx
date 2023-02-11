import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { ListGroup, Card } from "react-bootstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  const [update, setUpdate] = useState(false);

  const addTodo = (value) => {
    setTodos([...todos, { text: value, completed: false }]);
  };

  const updateTodo = (index) => {
    // Updating Todo Functionality To be Added
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const markDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    if (!updateValue) return;
    updateTodo();
    setUpdateValue("");
  };

  return (
    <Card>
      <Card.Header>
        <TodoForm
          update={update}
          updateValue={updateValue}
          value={value}
          setUpdate={setUpdate}
          setUpdateValue={setUpdateValue}
          setValue={setValue}
          handleSubmit={handleSubmit}
          handleSubmitUpdate={handleSubmitUpdate}
        />
      </Card.Header>
      <Card.Body>
        {todos.length === 0 ? (
          <Card className="text-center">
            <Card.Body>No Tasks Added Yet...</Card.Body>
          </Card>
        ) : (
          <ListGroup>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                index={index}
                update={update}
                removeTodo={removeTodo}
                setUpdate={setUpdate}
                markDone={markDone}
              />
            ))}
          </ListGroup>
        )}
      </Card.Body>
      {/* Displaying Number of Tasks */}
      <Card.Footer className="text-center">
        {todos.length} Tasks Pending
      </Card.Footer>
    </Card>
  );
};

export default TodoList;
