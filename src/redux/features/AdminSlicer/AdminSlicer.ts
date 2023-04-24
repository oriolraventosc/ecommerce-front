import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin } from "../../../types/types";

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
  },
});

export const adminReducer = AdminSlice.reducer;

export const { adminLogin: adminLoginActionCreator } = AdminSlice.actions;
