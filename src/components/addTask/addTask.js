import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/task/task.action";

import { STATUS_FILTERS, PRIORITY_FILTERS } from "../../constants";

import { Form, Col, Button, Container } from "react-bootstrap";

import { label, button } from "./addTask.module.scss";

export class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      status: STATUS_FILTERS.NEW,
      priority: PRIORITY_FILTERS.HIGH,
      content: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.props.addTask(this.state);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col xs={7}>
              <Form.Label className={label}>TÍTULO</Form.Label>
              <Form.Control
                type="text"
                placeholder="Título"
                onChange={this.handleChange}
                name="title"
              />
            </Col>
            <Col>
              <Form.Label className={label}>ESTADO</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="status"
              >
                {Object.keys(STATUS_FILTERS).map((filterKey) => (
                  <option key={filterKey}>{STATUS_FILTERS[filterKey]}</option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label className={label}>PRIORIDAD</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="priority"
              >
                {Object.keys(PRIORITY_FILTERS).map((filterKey) => (
                  <option key={filterKey}>{PRIORITY_FILTERS[filterKey]}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Row>
          <Form.Control
            style={{ marginBlock: "1%" }}
            placeholder="Descripción"
            as="textarea"
            rows={3}
            name="content"
            onChange={this.handleChange}
          />
          <Form.Row>
            <Button onClick={this.handleSubmit} className={button}>
              Crear tarea
            </Button>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default connect(null, { addTask })(AddTask);
