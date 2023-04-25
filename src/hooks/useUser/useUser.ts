import { useAppDispatch } from "../../redux/hooks";
import {
  emptyCartActionCreator,
  loadProductsActionCreator,
} from "../../redux/features/userSlicer/userSlicer";
import { useCallback } from "react";
import axios from "axios";
import { CheckoutData } from "../../types/types";
import { useNavigate } from "react-router";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const getProducts = useCallback(async () => {
    try {
      dispatch(openLoadingActionCreator());
      const url = `${apiUrl}products/loadAll`;
      const response = await axios.get(url);
      const apiResponse = response.data;
      dispatch(loadProductsActionCreator(apiResponse.productsList));
      dispatch(closeLoadingActionCreator());
    } catch {
      dispatch(closeLoadingActionCreator());
    }
  }, [apiUrl, dispatch]);
  const checkoutCartProducts = useCallback(
    async (data: CheckoutData) => {
      try {
        dispatch(openLoadingActionCreator());
        const url = `${apiUrl}products/checkout`;
        await axios.patch(url, data);
        dispatch(emptyCartActionCreator());
        dispatch(closeLoadingActionCreator());
        navigate("/home");
      } catch {
        dispatch(closeLoadingActionCreator());
      }
    },
    [apiUrl, navigate, dispatch]
  );
  return { getProducts, checkoutCartProducts };
};

export default useUser;
