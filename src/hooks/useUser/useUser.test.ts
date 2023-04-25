import { renderHook } from "@testing-library/react";
import providerWrapper from "../../mocks/providerWrapper";
import { store } from "../../redux/store";
import useUser from "./useUser";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useUser custom hook", () => {
  describe("When it is invoked with the method getProducts", () => {
    test("Then it should return a list of products", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: providerWrapper });

      await current.getProducts();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method getProducts and an axios error ocurres", () => {
    test("Then it should dispatch the closeLoading action", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: providerWrapper });

      await current.getProducts();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method checkoutCartProducts", () => {
    test("Then it should dispatch the emptyCart action", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: providerWrapper });

      await current.checkoutCartProducts({
        name: "John",
        email: "john@gmail.com",
        pendingProducts: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      });

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method checkoutCartProducts and an axios error ocurres", () => {
    test("Then it should dispatch the closeLoading action", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: providerWrapper });

      await current.checkoutCartProducts({
        name: "John",
        email: "john@gmail.com",
        pendingProducts: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      });

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
