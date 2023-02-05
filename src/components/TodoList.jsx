import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { ListGroup, Card } from "react-bootstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <Card>
      <Card.Header>
        <TodoForm addTodo={addTodo} />
      </Card.Header>
      <Card.Body>
        {todos.length === 0 ? (
          <p>No Tasks Added Yet...</p>
        ) : (
          <ListGroup>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                index={index}
                removeTodo={removeTodo}
              />
            ))}
          </ListGroup>
        )}
      </Card.Body>
      {/* Displaying Number of Tasks */}
      <Card.Footer>{todos.length} Tasks Pending</Card.Footer>
    </Card>
  );
};

export default TodoList;
