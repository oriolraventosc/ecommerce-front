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
    deleteFromCart: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      cart: [
        ...initialState.cart.filter(
          (product) => product.name !== action.payload
        ),
      ],
    }),
    emptyCart: (initialState) => ({
      ...initialState,
      cart: [],
    }),
  },
});

export const userReducer = UserSlice.reducer;

export const {
  loadProducts: loadProductsActionCreator,
  addToCart: addToCartActionCreator,
  deleteFromCart: deleteFromCartActionCreator,
  emptyCart: emptyCartActionCreator,
} = UserSlice.actions;
