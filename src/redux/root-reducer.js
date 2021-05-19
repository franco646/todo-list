import { combineReducers } from "redux";

import tasks from "./task/task.reducer";
import visibilityFilter from "./filter/filter.reducer";

export default combineReducers({ tasks, visibilityFilter });
