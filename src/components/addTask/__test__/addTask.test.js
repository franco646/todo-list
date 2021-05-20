import React from "react";
import { render, fireEvent, screen, store } from "../../../redux/test-utils";
import "@testing-library/jest-dom/extend-expect";

import AddTask from "../addTask";

describe("<AddTask />", () => {
  it("should add a task to the redux store on click the add button", async () => {
    render(<AddTask />);

    fireEvent.click(screen.getByText("Crear tarea"));

    expect(store.getState().tasks.taskList).toHaveLength(2);
  });
});
