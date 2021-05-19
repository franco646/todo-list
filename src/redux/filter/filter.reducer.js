import { filtersActionTypes } from "./filter.types";
import { STATUS_FILTERS, PRIORITY_FILTERS } from "../../constants";

const initialState = {
  status: STATUS_FILTERS.NEW,
  priority: PRIORITY_FILTERS.HIGH,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filtersActionTypes.SET_PRIORITY_FILTER: {
      return {
        ...state,
        priority: action.payload,
      };
    }
    case filtersActionTypes.SET_STATUS_FILTER: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
