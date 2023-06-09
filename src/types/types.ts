export interface Product {
  name: string;
  price: string;
  id?: string;
  quantity: number;
  image: string;
}

export interface User {
  productsList: Product[];
  cart: Product[];
  checkoutData: {
    name: string;
    email: string;
    pendingProducts: Product[];
  };
}

export interface Admin {
  username: string;
  password: string;
  id: string;
  pendingOrders: Product[];
  finishedOrders: Product[];
}

export interface CheckoutData {
  name: string;
  email: string;
  pendingProducts: Product[];
}

export interface loginData {
  username: string;
  password: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
  accessToken: string;
  password: string;
  pendingOrders: Product[];
  finishedOrders: Product[];
  isLogged: boolean;
}
