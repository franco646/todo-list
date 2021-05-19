import React from "react";
import { connect } from "react-redux";

import { Container, Col, Row, Alert } from "react-bootstrap";

import { getVisibleTasks } from "../../redux/task/task.selectors";

import Task from "../task/task";

import { alert } from "./taskList.module.scss";

const TaskList = ({ tasks }) => {
  return (
    <Container>
      {tasks.length > 0 ? (
        tasks
          .reduce(function (accumulator, currentValue, currentIndex, array) {
            if (currentIndex % 2 === 0)
              accumulator.push(array.slice(currentIndex, currentIndex + 2));
            return accumulator;
          }, [])
          .map((task) => {
            console.log(task);
            return (
              <Row>
                <Col>
                  <Task
                    id={task[0].id}
                    title={task[0].title}
                    content={task[0].content}
                    status={task[0].status}
                    priority={task[0].priority}
                  />
                </Col>
                {task[1] ? (
                  <Col>
                    <Task
                      id={task[1].id}
                      title={task[1].title}
                      content={task[1].content}
                      status={task[1].status}
                      priority={task[1].priority}
                    />
                  </Col>
                ) : null}
              </Row>
            );
          })
      ) : (
        <Alert variant="success" className={alert}>
          <Alert.Heading>NO HAY NINGUNA TAREA EN ESTA LISTA.</Alert.Heading>
        </Alert>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tasks: getVisibleTasks(state),
  };
};

export default connect(mapStateToProps)(TaskList);
