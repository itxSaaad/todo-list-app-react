import React, { useState } from "react";
import { Button, Card, Form, InputGroup, Stack } from "react-bootstrap";
import Todo from "./Todo";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      {/* Adding Tasks */}
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            controlId="formTaskInput"
            type="text"
            placeholder="Write your Task Here.."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Button variant="outline-primary" type="submit">
            Add Task
          </Button>
        </InputGroup>
      </Form>
      {/* Updating The Task */}
      {/* <Stack direction="horizontal" gap={3}>
          <Form.Control
            controlId="formTaskInputUpdate"
            type="text"
            placeholder="Update your Task.."
          />
          <Button variant="success">Update</Button>
          <div className="vr" />
          <Button variant="warning">Cancel</Button>
        </Stack> */}
    </>
  );
};

export default TodoForm;
