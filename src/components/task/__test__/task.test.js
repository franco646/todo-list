import React from "react";
import { render, fireEvent, screen, store } from "../../../redux/test-utils";

import Task from "../task";

describe("<Task />", () => {
  it("should remove a task from the redux store on click the delete button", async () => {
    render(<Task title="" content="" priority="" status="" id={1} />);

    fireEvent.click(screen.getByText("ELIMINAR"));

    expect(store.getState().tasks.taskList).toHaveLength(0);
  });
});
