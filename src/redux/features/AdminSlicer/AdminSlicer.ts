import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin, Product } from "../../../types/types";

interface AdminState extends Admin {
  isLogged: boolean;
  accessToken: string;
}

export const AdminInitialState: AdminState = {
  username: "",
  password: "",
  isLogged: false,
  accessToken: "",
  id: "",
  finishedOrders: [],
  pendingOrders: [],
};

const AdminSlice = createSlice({
  name: "admin",
  initialState: AdminInitialState,
  reducers: {
    adminLogin: (initialState, action: PayloadAction<AdminState>) => ({
      ...action.payload,
      isLogged: true,
    }),
    loadPendingOrders: (initialState, action: PayloadAction<Product[]>) => ({
      ...initialState,
      pendingOrders: [...action.payload],
    }),
    acceptOrder: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      pendingOrders: [
        ...initialState.pendingOrders.filter(
          (product) => product.name !== action.payload
        ),
      ],
    }),
    cancelOrder: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      pendingOrders: [
        ...initialState.pendingOrders.filter(
          (product) => product.name !== action.payload
        ),
      ],
    }),
  },
});

export const adminReducer = AdminSlice.reducer;

export const {
  adminLogin: adminLoginActionCreator,
  acceptOrder: acceptOrderActionCreator,
  cancelOrder: cancelOrderActionCreator,
  loadPendingOrders: loadPendingOrdersActionCreator,
} = AdminSlice.actions;
