import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { ListGroup, Card } from "react-bootstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState("");
  const [updateValue, setUpdateValue] = useState(
    todos.filter((todo) => todo.text)
  );

  const [update, setUpdate] = useState(false);

  const addTodo = (value) => {
    const newTodos = [...todos, { text: value, completed: false }];
    setTodos(newTodos);
  };

  const updateTodo = (index, text) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
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

  return (
    <Card>
      {/* Adding Tasks */}
      <Card.Header>
        <TodoForm
          update={update}
          updateValue={updateValue}
          value={value}
          setUpdate={setUpdate}
          setUpdateValue={setUpdateValue}
          setValue={setValue}
          addTodo={addTodo}
          updateTodo={updateTodo}
        />
      </Card.Header>

      {/* Displaying Tasks */}
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
        {todos.filter((todo) => !todo.completed).length} Tasks Pending
      </Card.Footer>
    </Card>
  );
};

export default TodoList;
