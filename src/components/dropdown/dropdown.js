import React from "react";

import { Form } from "react-bootstrap";

import style from "./dropdown.module.scss";

const Dropdown = ({ options, value, onChange }) => {
  return (
    <Form.Control
      className={style.dropdown}
      as="select"
      onChange={onChange}
      value={value}
    >
      {Object.keys(options).map((filterKey) => (
        <option key={filterKey}>{options[filterKey]}</option>
      ))}
    </Form.Control>
  );
};

export default Dropdown;
