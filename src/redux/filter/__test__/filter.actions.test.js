import * as actions from "../filter.actions";
import * as types from "../filter.types";

const payloadMock = "FILTER_NAME";

describe("filter actions", () => {
  it("should create an action to set status filter", () => {
    const expectedAction = {
      type: types.filtersActionTypes.SET_STATUS_FILTER,
      payload: payloadMock,
    };
    expect(actions.setStatusFilter(payloadMock)).toEqual(expectedAction);
  });

  it("should create an action to set priority filter", () => {
    const expectedAction = {
      type: types.filtersActionTypes.SET_PRIORITY_FILTER,
      payload: payloadMock,
    };
    expect(actions.setPriorityFilter(payloadMock)).toEqual(expectedAction);
  });
});
