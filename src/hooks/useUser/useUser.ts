import { useAppDispatch } from "../../redux/hooks";
import {
  emptyCartActionCreator,
  loadProductsActionCreator,
} from "../../redux/features/userSlicer/userSlicer";
import { useCallback } from "react";
import axios from "axios";
import { CheckoutData } from "../../types/types";
import { useNavigate } from "react-router";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const getProducts = useCallback(async () => {
    try {
      const url = `${apiUrl}products/loadAll`;
      const response = await axios.get(url);
      const apiResponse = response.data;
      dispatch(loadProductsActionCreator(apiResponse.productsList));
    } catch {}
  }, [apiUrl, dispatch]);
  const checkoutCartProducts = useCallback(
    async (data: CheckoutData) => {
      try {
        const url = `${apiUrl}products/checkout`;
        await axios.patch(url, data);
        dispatch(emptyCartActionCreator());
        navigate("/home");
      } catch {}
    },
    [apiUrl, navigate, dispatch]
  );
  return { getProducts, checkoutCartProducts };
};

export default useUser;
