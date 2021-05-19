import * as actions from "../task.action";
import * as types from "../task.types";

const payloadMock = {
  priority: "high",
  status: "new",
  title: "hola",
  content: "chau",
};

describe("actions", () => {
  it("should create an action to add a task", () => {
    const expectedAction = {
      type: types.taskActionTypes.ADD_TASK,
      payload: {
        ...payloadMock,
        id: 1,
      },
    };
    expect(actions.addTask(payloadMock)).toEqual(expectedAction);
  });

  it("should create an action to remove a task", () => {
    const expectedAction = {
      type: types.taskActionTypes.DELETE_TASK,
      payload: 1,
    };
    expect(actions.deleteTask(1)).toEqual(expectedAction);
  });
});
