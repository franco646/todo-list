import React from "react";
import { render, fireEvent, screen, store } from "../../../redux/test-utils";
import { PRIORITY_FILTERS, STATUS_FILTERS } from "../../../constants";

import Filters from "../filters";

describe("<AddTask />", () => {
  it("should change the priority filter in the redux store", async () => {
    render(<Filters />);

    fireEvent.change(screen.getByTestId("select-priority"), {
      target: { value: PRIORITY_FILTERS.LOW },
    });

    expect(store.getState().visibilityFilter.priority).toBe(
      PRIORITY_FILTERS.LOW
    );
  });

  it("should change the status filter in the redux store", async () => {
    render(<Filters />);

    fireEvent.change(screen.getByTestId("select-status"), {
      target: { value: STATUS_FILTERS.FINISHED },
    });

    expect(store.getState().visibilityFilter.status).toBe(
      STATUS_FILTERS.FINISHED
    );
  });
});
