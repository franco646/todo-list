import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../../redux/task/task.action";

import { Card, Button, Col, Row } from "react-bootstrap";

import { card, button, cardTitle, cardText } from "./task.module.scss";

const Task = ({ title, content, priority, status, deleteTask, id }) => {
  return (
    <Card className={card}>
      <Card.Body>
        <Row style={{ textAlign: "end" }}>
          <Col xs={8}></Col>
          <Col>
            <div style={{ display: "inline-flex" }}>
              Estado:&ensp;<i>{status}</i>
            </div>
          </Col>
          <Col>
            <div style={{ display: "inline-flex" }}>
              Prioridad:&ensp;<i>{priority}</i>
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

export default connect(null, { deleteTask })(Task);
