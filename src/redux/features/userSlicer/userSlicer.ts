import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Product } from "../../../types/types";

export const UserInitialState: User = {
  productsList: [],
  cart: [],
  checkoutData: {
    name: "",
    email: "",
    pendingProducts: [],
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    loadProducts: (initialState, action: PayloadAction<Product[]>) => ({
      ...initialState,
      productsList: [...action.payload],
    }),
    addToCart: (initialState, action: PayloadAction<Product>) => ({
      ...initialState,
      cart: [...initialState.cart, action.payload],
    }),
  },
});

export const userReducer = UserSlice.reducer;

export const {
  loadProducts: loadProductsActionCreator,
  addToCart: addToCartActionCreator,
} = UserSlice.actions;
