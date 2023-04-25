import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlicer/userSlicer";
import { adminReducer } from "./features/AdminSlicer/AdminSlicer";
import { uiReducer } from "./features/uiSlicer/uiSlicer";

export const store = configureStore({
  reducer: {
    userActions: userReducer,
    adminActions: adminReducer,
    uiActions: uiReducer,
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
