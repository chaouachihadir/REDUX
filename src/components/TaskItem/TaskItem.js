import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { done_task, delete_task } from "../../Redux/Actions/actions";
import "../../App.css";
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDone = (id) => {
    dispatch(done_task({ id }));
  };
  const handleDelete = (id) => {
    dispatch(delete_task({ id }));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>{task.description}</Card.Text>
        <Button
          variant={task.done ? "success" : "warning"}
          onClick={() => handleDone(task.id)}
        >
          {task.done ? "done" : "Not done"}
        </Button>
        <Button variant="primary">Edit</Button>
        <Button variant="danger" onClick={() => handleDelete(task.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
export default TaskItem;
