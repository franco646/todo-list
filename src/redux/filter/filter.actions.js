import { filtersActionTypes } from "./filter.types";

export const setPriorityFilter = (filter) => {
  console.log('ACTION PRIORITI!!!!!!!!!')
  return ({
  type: filtersActionTypes.SET_PRIORITY_FILTER,
  payload: filter,
})}

export const setStatusFilter = (filter) => ({
  type: filtersActionTypes.SET_STATUS_FILTER,
  payload: filter,
});
