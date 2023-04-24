import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlicer/userSlicer";
import { adminReducer } from "./features/AdminSlicer/AdminSlicer";

export const store = configureStore({
  reducer: {
    userActions: userReducer,
    adminActions: adminReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
