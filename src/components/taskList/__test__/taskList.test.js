import React from "react";
import { render, screen, store } from "../../../redux/test-utils";
import { deleteTask } from "../../../redux/task/task.action";

import TaskList from "../taskList";

describe("<TaskList />", () => {
  it("should render a task", async () => {
    render(<TaskList tasks={[]} />);

    expect(screen.getAllByTestId("task-card")).toHaveLength(1);
  });

  it("should show an alert if the list is empty", async () => {
    store.dispatch(deleteTask(1));
    render(<TaskList tasks={[]} />);

    expect(screen.queryAllByTestId("task-card")).toHaveLength(0);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
  });
});
