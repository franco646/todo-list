import { taskActionTypes } from "./task.types";
import { addTaskToList, removeTaskFromList } from "./task.utils";

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
    default: {
      return state;
    }
  }
};

export default taskReducer;
