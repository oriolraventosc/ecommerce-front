import axios from "axios";
import {
  acceptOrderActionCreator,
  adminLoginActionCreator,
  cancelOrderActionCreator,
  loadPendingOrdersActionCreator,
} from "../../redux/features/AdminSlicer/AdminSlicer";
import { useAppDispatch } from "../../redux/hooks";
import { useCallback } from "react";
import { JwtPayloadCustom, loginData } from "../../types/types";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";

const useAdmin = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loadPendingOrders = useCallback(async () => {
    try {
      dispatch(openLoadingActionCreator());
      const url = `${apiUrl}admin/pending-orders`;
      const response = await axios.get(url);
      const apiResponse = response.data;
      dispatch(loadPendingOrdersActionCreator(apiResponse.pendingOrders));
      dispatch(closeLoadingActionCreator());
    } catch {
      dispatch(closeLoadingActionCreator());
    }
  }, [apiUrl, dispatch]);

  const acceptOrder = useCallback(
    async (id: string) => {
      try {
        dispatch(openLoadingActionCreator());
        const url = `${apiUrl}admin/accept-order/${id}`;
        await axios.patch(url);
        dispatch(acceptOrderActionCreator(id));
        dispatch(closeLoadingActionCreator());
      } catch {
        dispatch(closeLoadingActionCreator());
      }
    },
    [apiUrl, dispatch]
  );
  const adminLogin = useCallback(
    async (data: loginData) => {
      try {
        dispatch(openLoadingActionCreator());
        const url = `${apiUrl}admin/login`;
        const response = await axios.post(url, data);

        const { accessToken } = await response.data;

        const loggedUser: JwtPayloadCustom = jwtDecode(accessToken);
        dispatch(
          adminLoginActionCreator({
            ...loggedUser,
            accessToken,
          })
        );

        window.localStorage.setItem("token", accessToken);
        dispatch(closeLoadingActionCreator());
        navigate("/home");
      } catch {
        dispatch(closeLoadingActionCreator());
      }
    },
    [apiUrl, dispatch, navigate]
  );

  const cancelOrder = useCallback(
    async (id: string) => {
      try {
        dispatch(openLoadingActionCreator());
        const url = `${apiUrl}admin/cancel-order/${id}`;
        await axios.patch(url);
        dispatch(cancelOrderActionCreator(id));
        dispatch(closeLoadingActionCreator());
      } catch {
        dispatch(closeLoadingActionCreator());
      }
    },
    [apiUrl, dispatch]
  );
  return { adminLogin, loadPendingOrders, acceptOrder, cancelOrder };
};

export default useAdmin;
