import filterReducer from "../filter.reducer";
import * as types from "../filter.types";

const payloadMock = "FILTER_NAME";

const initialStateMock = {
  status: "STATUS_FILTER",
  priority: "PRIORITY_FILTER",
};

describe("filter reducer", () => {
  it("should return the initial state", () => {
    expect(filterReducer(initialStateMock, {})).toEqual({
      status: "STATUS_FILTER",
      priority: "PRIORITY_FILTER",
    });
  });

  it("should handle SET_PRIORITY_FILTER", () => {
    expect(
      filterReducer(initialStateMock, {
        type: types.filtersActionTypes.SET_PRIORITY_FILTER,
        payload: payloadMock,
      })
    ).toEqual({
      status: "STATUS_FILTER",
      priority: payloadMock,
    });
  });

  it("should handle SET_STATUS_FILTER", () => {
    expect(
      filterReducer(initialStateMock, {
        type: types.filtersActionTypes.SET_STATUS_FILTER,
        payload: payloadMock,
      })
    ).toEqual({
      status: payloadMock,
      priority: "PRIORITY_FILTER",
    });
  });
});
