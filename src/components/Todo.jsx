import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCheckCircle,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

const Todo = ({ todo, index, removeTodo }) => (
  <ListGroupItem key={index} onClick={() => removeTodo(index)}>
    {todo}
  </ListGroupItem>
);

export default Todo;
