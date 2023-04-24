import {
  adminLoginActionCreator,
  acceptOrderActionCreator,
  cancelOrderActionCreator,
  loadPendingOrdersActionCreator,
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

  describe("When it is invoked with the method acceptOrder", () => {
    test("Then it should delete the product from the pendingOrders list", () => {
      const action = acceptOrderActionCreator("USB");
      const initialState = {
        username: "",
        password: "",
        isLogged: false,
        accessToken: "",
        id: "",
        finishedOrders: [],
        pendingOrders: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
          {
            name: "USB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      };
      const expectedState = {
        username: "",
        password: "",
        isLogged: false,
        accessToken: "",
        id: "",
        finishedOrders: [],
        pendingOrders: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      };

      const newState = adminReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method cancelOrder", () => {
    test("Then it should delete the product from the pendingOrders list", () => {
      const action = cancelOrderActionCreator("USB");
      const initialState = {
        username: "",
        password: "",
        isLogged: false,
        accessToken: "",
        id: "",
        finishedOrders: [],
        pendingOrders: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
          {
            name: "USB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      };
      const expectedState = {
        username: "",
        password: "",
        isLogged: false,
        accessToken: "",
        id: "",
        finishedOrders: [],
        pendingOrders: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      };

      const newState = adminReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method loadPendingOrders", () => {
    test("Then it should a list with 2 products", () => {
      const action = loadPendingOrdersActionCreator([
        {
          name: "USB SamDisk 2.0 64GB",
          price: "10.99€",
          id: "12345",
          quantity: 2,
          image: "usb.jpg",
        },
      ]);
      const expectedState = {
        username: "",
        password: "",
        isLogged: false,
        accessToken: "",
        id: "",
        finishedOrders: [],
        pendingOrders: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      };

      const newState = adminReducer(AdminInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
