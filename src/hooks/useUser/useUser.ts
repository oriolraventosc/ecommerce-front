import { useAppDispatch } from "../../redux/hooks";
import { loadProductsActionCreator } from "../../redux/features/userSlicer/userSlicer";
import { useCallback } from "react";
import axios from "axios";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();
  const getProducts = useCallback(async () => {
    try {
      const url = `${apiUrl}products/loadAll`;
      const response = await axios.get(url);
      const apiResponse = response.data;
      dispatch(loadProductsActionCreator(apiResponse.productsList));
    } catch {}
  }, [apiUrl, dispatch]);
  return { getProducts };
};

export default useUser;
