import * as selector from "../task.selectors";
import * as constants from "../../../constants";

const taskListMock = [
  {
    priority: constants.PRIORITY_FILTERS.LOW,
    status: constants.STATUS_FILTERS.NEW,
  },
  {
    priority: constants.PRIORITY_FILTERS.MEDIUM,
    status: constants.STATUS_FILTERS.IN_PROGRESS,
  },
  {
    priority: constants.PRIORITY_FILTERS.HIGH,
    status: constants.STATUS_FILTERS.FINISHED,
  },
];

describe("task selectors", () => {
  test("getVisibleTasks should filter by NEW status", () => {
    const storeMock = {
      tasks: { taskList: taskListMock },
      visibilityFilter: { status: constants.STATUS_FILTERS.NEW },
    };
    expect(selector.getVisibleTasks(storeMock)).toEqual([
      {
        priority: constants.PRIORITY_FILTERS.LOW,
        status: constants.STATUS_FILTERS.NEW,
      },
    ]);
  });

  test("getVisibleTasks should filter by IN_PROGRESS status", () => {
    const storeMock = {
      tasks: { taskList: taskListMock },
      visibilityFilter: { status: constants.STATUS_FILTERS.IN_PROGRESS },
    };
    expect(selector.getVisibleTasks(storeMock)).toEqual([
      {
        priority: constants.PRIORITY_FILTERS.MEDIUM,
        status: constants.STATUS_FILTERS.IN_PROGRESS,
      },
    ]);
  });

  test("getVisibleTasks should filter by FINISHED status", () => {
    const storeMock = {
      tasks: { taskList: taskListMock },
      visibilityFilter: { status: constants.STATUS_FILTERS.FINISHED },
    };
    expect(selector.getVisibleTasks(storeMock)).toEqual([
      {
        priority: constants.PRIORITY_FILTERS.HIGH,
        status: constants.STATUS_FILTERS.FINISHED,
      },
    ]);
  });

  test("getVisibleTasks should sort the list by LOW priority", () => {
    const storeMock = {
      tasks: { taskList: taskListMock },
      visibilityFilter: { priority: constants.PRIORITY_FILTERS.LOW },
    };

    const results = selector.getVisibleTasks(storeMock);

    expect(results.length).toBe(taskListMock.length);
    expect(results[0]).toEqual({
      priority: constants.PRIORITY_FILTERS.LOW,
      status: constants.STATUS_FILTERS.NEW,
    });
  });

  test("getVisibleTasks should sort the list by MEDIUM priority", () => {
    const storeMock = {
      tasks: { taskList: taskListMock },
      visibilityFilter: { priority: constants.PRIORITY_FILTERS.MEDIUM },
    };

    const results = selector.getVisibleTasks(storeMock);

    expect(results.length).toBe(taskListMock.length);
    expect(results[0]).toEqual({
      priority: constants.PRIORITY_FILTERS.MEDIUM,
      status: constants.STATUS_FILTERS.IN_PROGRESS,
    });
  });

  test("getVisibleTasks should sort the list by HIGH priority", () => {
    const storeMock = {
      tasks: { taskList: taskListMock },
      visibilityFilter: { priority: constants.PRIORITY_FILTERS.HIGH },
    };

    const results = selector.getVisibleTasks(storeMock);

    expect(results.length).toBe(taskListMock.length);
    expect(results[0]).toEqual({
      priority: constants.PRIORITY_FILTERS.HIGH,
      status: constants.STATUS_FILTERS.FINISHED,
    });
  });
});
