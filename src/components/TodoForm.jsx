import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const TodoForm = ({
  update,
  value,
  setValue,
  handleSubmit,
  handleSubmitUpdate,
  setUpdatedValue,
}) => {
  return (
    <>
      {update ? (
        // Updating Forms
        <Form onSubmit={handleSubmitUpdate}>
          <InputGroup>
            <Form.Control
              controlid="formTaskInputUpdate"
              type="text"
              placeholder="Update your Task.."
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <Button variant="btn btn-success" type="submit">
              Update
            </Button>
            <Button variant="btn btn-info">Cancel</Button>
          </InputGroup>
        </Form>
      ) : (
        /* Adding Tasks */ <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control
              controlid="formTaskInput"
              type="text"
              placeholder="Write your Task Here.."
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <Button variant="btn btn-secondary" type="submit">
              Add Task
            </Button>
          </InputGroup>
        </Form>
      )}
    </>
  );
};

export default TodoForm;
