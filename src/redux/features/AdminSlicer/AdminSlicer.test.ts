import {
  adminLoginActionCreator,
  adminReducer,
  AdminInitialState,
} from "./AdminSlicer";

describe("Given a adminReducer", () => {
  describe("When it is invoked with the method adminLogin", () => {
    test("Then it should change the property isLogged from false to true", () => {
      const action = adminLoginActionCreator({
        username: "admin",
        password: "admin",
        id: "admin",
        finishedOrders: [],
        pendingOrders: [],
        accessToken: "",
        isLogged: false,
      });

      const newState = adminReducer(AdminInitialState, action);

      expect(newState.isLogged).toBeTruthy();
    });
  });
});
