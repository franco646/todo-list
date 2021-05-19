import taskReducer from "../task.reducer";
import * as types from "../task.types";

const payloadMock = {
  id: 1,
  priority: "",
  status: "",
  title: "",
  content: "",
};

const initialStateMock = {
  taskList: [],
};

describe("task reducer", () => {
  it("should return the initial state", () => {
    expect(taskReducer(undefined, {})).toEqual({
      taskList: [],
    });
  });

  it("should handle ADD_TASK", () => {
    expect(
      taskReducer(initialStateMock, {
        type: types.taskActionTypes.ADD_TASK,
        payload: payloadMock,
      })
    ).toEqual({
      taskList: [payloadMock],
    });
  });

  it("should handle DELETE_TASK", () => {
    expect(
      taskReducer(
        { taskList: [{ id: 1 }] },
        {
          type: types.taskActionTypes.DELETE_TASK,
          payload: 1,
        }
      )
    ).toEqual({
      taskList: [],
    });
  });
});
