import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCheckCircle,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

const Todo = ({ todo, index, removeTodo }) => (
  <ListGroupItem key={index}>
    <span>{index + 1}</span>
    {todo}
    <span>
      <FontAwesomeIcon icon={faPenToSquare} />
    </span>
    <span>
      <FontAwesomeIcon icon={faCheckCircle} />
    </span>
    <span>
      <FontAwesomeIcon icon={faTrashCan} onClick={() => removeTodo(index)} />
    </span>
  </ListGroupItem>
);

export default Todo;
