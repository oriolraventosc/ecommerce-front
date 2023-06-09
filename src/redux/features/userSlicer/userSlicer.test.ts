import {
  UserInitialState,
  addToCartActionCreator,
  loadProductsActionCreator,
  deleteFromCartActionCreator,
  emptyCartActionCreator,
  userReducer,
} from "./userSlicer";

describe("Given a userReducer", () => {
  describe("When it is invoked with the method loadProducts", () => {
    test("Then it should a list with 2 products", () => {
      const action = loadProductsActionCreator([
        {
          name: "USB SamDisk 2.0 64GB",
          price: "10.99€",
          id: "12345",
          quantity: 2,
          image: "usb.jpg",
        },
        {
          name: "USB SamDisk 2.0 64GB",
          price: "10.99€",
          id: "12345",
          quantity: 2,
          image: "usb.jpg",
        },
      ]);
      const expectedState = {
        productsList: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
        cart: [],
        checkoutData: {
          name: "",
          email: "",
          pendingProducts: [],
        },
      };

      const newState = userReducer(UserInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method addToCart", () => {
    test("Then it should add an object to the cart list", () => {
      const action = addToCartActionCreator({
        name: "USB SamDisk 2.0 64GB",
        price: "10.99€",
        id: "12345",
        quantity: 2,
        image: "usb.jpg",
      });
      const expectedState = {
        productsList: [],
        checkoutData: {
          name: "",
          email: "",
          pendingProducts: [],
        },
        cart: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      };

      const newState = userReducer(UserInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the deleteFromCart method", () => {
    test("Then it should return 1 products in the cart", () => {
      const action = deleteFromCartActionCreator("USB");
      const initialState = {
        productsList: [],
        cart: [
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
        checkoutData: {
          name: "",
          email: "",
          pendingProducts: [],
        },
      };
      const expectedState = {
        productsList: [],
        checkoutData: {
          name: "",
          email: "",
          pendingProducts: [],
        },
        cart: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      };

      const newState = userReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method emptyCart", () => {
    test("Then it should empty the products cart", () => {
      const action = emptyCartActionCreator();
      const initialState = {
        productsList: [],
        cart: [
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
        checkoutData: {
          name: "",
          email: "",
          pendingProducts: [],
        },
      };
      const expectedState = {
        productsList: [],
        checkoutData: {
          name: "",
          email: "",
          pendingProducts: [],
        },
        cart: [],
      };

      const newState = userReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
