import { createSelector } from "reselect";
import { PRIORITY_FILTERS, STATUS_FILTERS } from "../../constants";

const getTasksList = (state) => state.tasks.taskList;
const getStatusFilter = (state) => state.visibilityFilter.status;
const getPriorityFilter = (state) => state.visibilityFilter.priority;

export const getTasksByStatus = createSelector(
  [getStatusFilter, getTasksList],
  (filter, tasks) => {
    switch (filter) {
      case STATUS_FILTERS.NEW: {
        return tasks.filter((task) => task.status === STATUS_FILTERS.NEW);
      }
      case STATUS_FILTERS.IN_PROGRESS: {
        return tasks.filter(
          (task) => task.status === STATUS_FILTERS.IN_PROGRESS
        );
      }
      case STATUS_FILTERS.FINISHED: {
        return tasks.filter((task) => task.status === STATUS_FILTERS.FINISHED);
      }
      default: {
        return tasks;
      }
    }
  }
);

export const getTasksByPriority = createSelector(
  [getPriorityFilter, getTasksByStatus],
  (filter, tasks) => {
    const PRIORITIES = {
      [PRIORITY_FILTERS.HIGH]: 1,
      [PRIORITY_FILTERS.MEDIUM]: 2,
      [PRIORITY_FILTERS.LOW]: 3,
    };
    switch (filter) {
      case PRIORITY_FILTERS.HIGH: {
        return [...tasks].sort((a, b) =>
          PRIORITIES[a.priority] > PRIORITIES[b.priority] ? 1 : -1
        );
      }
      case PRIORITY_FILTERS.MEDIUM: {
        return [...tasks].sort((a, b) =>
          PRIORITIES[a.priority] === 2 ? -1 : 1
        );
      }
      case PRIORITY_FILTERS.LOW: {
        return [...tasks].sort((a, b) =>
          PRIORITIES[a.priority] < PRIORITIES[b.priority] ? 1 : -1
        );
      }
      default: {
        return tasks;
      }
    }
  }
);

export const getVisibleTasks = createSelector([getTasksByPriority], (tasks) => {
  return tasks;
});
