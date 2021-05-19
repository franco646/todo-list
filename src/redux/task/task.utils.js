export const addTaskToList = (taskList, taskToAdd) => {
  return [...taskList, taskToAdd];
};

export const removeTaskFromList = (taskList, TaskIdToRemove) => {
  return taskList.filter((task) => task.id !== TaskIdToRemove);
};
