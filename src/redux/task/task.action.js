import { taskActionTypes } from "./task.types";

let nextTodoId = 0;

export const addTask = (task) => ({
  type: taskActionTypes.ADD_TASK,
  payload: {
    id: ++nextTodoId,
    ...task,
  },
});

export const deleteTask = (id) => ({
  type: taskActionTypes.DELETE_TASK,
  payload: id,
});
