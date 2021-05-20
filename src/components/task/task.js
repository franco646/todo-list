import React from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  setTaskPriority,
  setTaskStatus,
} from "../../redux/task/task.action";

import { Card, Button, Col, Row, Form } from "react-bootstrap";

import { STATUS_FILTERS, PRIORITY_FILTERS } from "../../constants";

import Dropdown from "../dropdown/dropdown";

import {
  card,
  button,
  cardTitle,
  cardText,
  dropdown,
} from "./task.module.scss";

const Task = ({
  title,
  content,
  deleteTask,
  priority,
  status,
  id,
  setTaskStatus,
  setTaskPriority,
}) => {
  const handleStatusChange = (e) => {
    const selectedPriority = e.target.value;
    setTaskStatus(selectedPriority, id);
  };

  const handlePriorityChange = (e) => {
    const selectedStatus = e.target.value;
    setTaskPriority(selectedStatus, id);
  };

  return (
    <Card className={card} data-testid="task-card">
      <Card.Body>
        <Row style={{ textAlign: "end" }}>
          <Col sm={5} md={5} lg={5} xl={5}></Col>
          <Col>
            <div style={{ display: "inline-flex", lineHeight: "40px" }}>
              ESTADO:&ensp;
              <Dropdown
                value={status}
                options={STATUS_FILTERS}
                onChange={handleStatusChange}
              />
            </div>
          </Col>
          <Col>
            <div style={{ display: "inline-flex", lineHeight: "40px" }}>
              PRIORIDAD:&ensp;
              <Dropdown
                value={priority}
                options={PRIORITY_FILTERS}
                onChange={handlePriorityChange}
              />
            </div>
          </Col>
        </Row>
        <Card.Title className={cardTitle}>
          <strong>Titulo:&ensp;</strong>
          {title.toUpperCase()}
        </Card.Title>
        <hr />
        <Card.Text className={cardText}>
          <strong>Descripción:&ensp;</strong>
          {content}
        </Card.Text>
        <Button className={button} onClick={() => deleteTask(id)}>
          ELIMINAR
        </Button>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { deleteTask, setTaskPriority, setTaskStatus })(
  Task
);
