import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
}

export const uiInitialState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openLoading: (initialState) => ({
      ...initialState,
      isLoading: true,
    }),
    closeLoading: (initialState) => ({
      ...initialState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openLoading: openLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = uiSlice.actions;
