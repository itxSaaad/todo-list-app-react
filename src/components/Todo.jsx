import React, { useState } from "react";
import { ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCheckCircle,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

const Todo = ({ todo, index, markDone, update, setUpdate, removeTodo }) => {
  const [textDecoration, setTextDecoration] = useState(false);

  return (
    <ListGroupItem
      key={index}
      className={`${textDecoration ? "bg-success" : ""}`}
    >
      <div className="position-relative text-start">
        <div
          className={`${
            textDecoration
              ? "text-decoration-line-through text-muted fw-bolder fst-italic d-flex align-items-center"
              : "d-flex align-items-center"
          }`}
        >
          <span
            style={{ width: "20px", height: "20px", marginRight: "0.5rem" }}
            className="d-flex text-center align-items-center justify-content-center square border border-secondary rounded-circle"
          >
            {index + 1}
          </span>
          <span className="d-flex text-wrap">{todo.text}</span>
        </div>

        <div className="position-absolute top-50 translate-middle-y end-0 d-inline-block w-auto">
          <span
            title="Edit"
            className="d-inline-block btn btn-sm btn-secondary"
            onClick={() => {
              setUpdate(true);
            }}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
          <span
            title="Completed / Not Completed"
            className="d-inline-block mx-1 btn btn-sm btn-secondary"
            onClick={() => {
              markDone(index);
              setTextDecoration((prevTextDecoration) => !prevTextDecoration);
            }}
          >
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span
            title="Delete"
            className="d-inline-block  btn btn-sm btn-secondary"
            onClick={() => removeTodo(index)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default Todo;
