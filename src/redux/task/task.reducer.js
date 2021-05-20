import { taskActionTypes } from "./task.types";
import {
  addTaskToList,
  removeTaskFromList,
  changeTaskPriority,
  changeTaskStatus,
} from "./task.utils";

const initialState = {
  taskList: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskActionTypes.ADD_TASK: {
      return {
        ...state,
        taskList: addTaskToList(state.taskList, action.payload),
      };
    }
    case taskActionTypes.DELETE_TASK: {
      return {
        ...state,
        taskList: removeTaskFromList(state.taskList, action.payload),
      };
    }
    case taskActionTypes.SET_TASK_PRIORITY: {
      return {
        ...state,
        taskList: changeTaskPriority(
          state.taskList,
          action.payload.priority,
          action.payload.taskId
        ),
      };
    }
    case taskActionTypes.SET_TASK_STATUS: {
      return {
        ...state,
        taskList: changeTaskStatus(
          state.taskList,
          action.payload.status,
          action.payload.taskId
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
