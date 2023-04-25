import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
  uiInitialState,
  uiReducer,
} from "./uiSlicer";

describe("Given a uiReducer", () => {
  describe("When it is invoked with the method openLoading", () => {
    test("Then it should change the property isLoading to true", () => {
      const action = openLoadingActionCreator();
      const expectedState = {
        isLoading: true,
      };

      const newState = uiReducer(uiInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method closeLoading", () => {
    test("Then it should change the property isLoading to false", () => {
      const action = closeLoadingActionCreator();
      const initialState = {
        isLoading: true,
      };
      const expectedState = {
        isLoading: false,
      };

      const newState = uiReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
