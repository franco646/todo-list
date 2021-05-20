import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./root-reducer";
import { STATUS_FILTERS, PRIORITY_FILTERS } from "../constants";

export const store = createStore(rootReducer, {
  tasks: {
    taskList: [
      {
        id: 1,
        priority: PRIORITY_FILTERS.HIGH,
        status: STATUS_FILTERS.NEW,
        title: "",
        content: "",
      },
    ],
  },
});

function render(ui, renderOptions) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
