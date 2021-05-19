import * as utils from "../task.utils";

const tasksListMock = [
  {
    id: 1,
    priority: "",
    status: "",
    title: "",
    content: "",
  },
];

const taskMock = {
  id: 2,
  priority: "",
  status: "",
  title: "",
  content: "",
};

describe("tasks utils", () => {
  it("should add a task to list", () => {
    expect(utils.addTaskToList(tasksListMock, taskMock)).toEqual([
      ...tasksListMock,
      taskMock,
    ]);
  });

  it("Should remove a task from list", () => {
    expect(utils.removeTaskFromList(tasksListMock, 1)).toEqual([]);
  });
});
