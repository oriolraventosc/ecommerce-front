import { renderHook } from "@testing-library/react";
import providerWrapper from "../../mocks/providerWrapper";
import { store } from "../../redux/store";
import useAdmin from "./useAdmin";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useAdmin custom hook", () => {
  describe("When it is invoked with the method loadPendingOrders", () => {
    test("Then it should return a list of orders", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.loadPendingOrders();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method loadPendingOrders and an axios error ocurres", () => {
    test("Then it should dispatch the closeLoading action", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.loadPendingOrders();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method adminLogin", () => {
    test("Then it should call a dispatch action", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.adminLogin({ username: "admin", password: "admin" });

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method adminLogin and an axios error ocurres", () => {
    test("Then it should dispatch the closeLoading action", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.adminLogin({ username: "admin", password: "admin" });

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method acceptOrder", () => {
    test("Then it should call a dispatch action", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.acceptOrder("USB");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method acceptOrder and an axios error ocurres", () => {
    test("Then it should dispatch the closeLoading action", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.acceptOrder("USB");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method cancelOrder", () => {
    test("Then it should call a dispatch action", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.cancelOrder("USB");

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method cancelOrder and an axios error ocurres", () => {
    test("Then it should dispatch the closeLoading action", async () => {
      const {
        result: { current },
      } = renderHook(() => useAdmin(), { wrapper: providerWrapper });

      await current.cancelOrder("USB");

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
