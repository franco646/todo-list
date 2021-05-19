import React from "react";
import { connect } from "react-redux";
import { STATUS_FILTERS, PRIORITY_FILTERS } from "../../constants";

import {
  setPriorityFilter,
  setStatusFilter,
} from "../../redux/filter/filter.actions";

import { Form, Col, Container } from "react-bootstrap";

import { label } from "./filters.module.scss";

export const Filters = ({ setPriorityFilter, setStatusFilter }) => {
  const handleStatusFilter = (e) => {
    console.log('ESTATUS FILTER')
    const filter = e.target.value;
    setStatusFilter(filter);
  };

  const handlePriorityFilter = (e) => {
    console.log('PRIORITY FILTER')
    const filter = e.target.value;
    setPriorityFilter(filter);
  };

  return (
    <Container style={{ marginBlock: "1%" }}>
      <h2 className={label}>FILTRAR POR:</h2>
      <Form.Row>
        <Col>
          <Form.Label className={label}>ESTADO</Form.Label>
          <Form.Control as="select" onChange={handleStatusFilter} data-testid="select-status">
            {Object.keys(STATUS_FILTERS).map((filterKey) => (
              <option>{STATUS_FILTERS[filterKey]}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label className={label}>PRIORIDAD</Form.Label>
          <button onClick={setStatusFilter}>FRANCO</button>
          <Form.Control as="select" onChange={handlePriorityFilter} data-testid="select-priority">
            {Object.keys(PRIORITY_FILTERS).map((filterKey) => (
              <option>{PRIORITY_FILTERS[filterKey]}</option>
            ))}
          </Form.Control>
        </Col>
      </Form.Row>
    </Container>
  );
};

export default connect(null, { setStatusFilter, setPriorityFilter })(Filters);
