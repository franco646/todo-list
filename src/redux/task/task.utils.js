export const addTaskToList = (taskList, taskToAdd) => {
  return [...taskList, taskToAdd];
};

export const removeTaskFromList = (taskList, TaskIdToRemove) => {
  return taskList.filter((task) => task.id !== TaskIdToRemove);
};

export const changeTaskStatus = (taskList, newStatus, taskIdToUpdate) => {
  const updatedTaskList = [...taskList];

  const taskToUpdateIndex = taskList.findIndex(
    (task) => task.id === taskIdToUpdate
  );

  updatedTaskList[taskToUpdateIndex].status = newStatus;

  return updatedTaskList;
};

export const changeTaskPriority = (taskList, newPriority, taskIdToUpdate) => {
  const updatedTaskList = [...taskList];

  const taskToUpdateIndex = taskList.findIndex(
    (task) => task.id === taskIdToUpdate
  );

  updatedTaskList[taskToUpdateIndex].priority = newPriority;

  return updatedTaskList;
};
