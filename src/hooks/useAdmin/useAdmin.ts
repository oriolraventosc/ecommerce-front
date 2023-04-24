import axios from "axios";
import { adminLoginActionCreator } from "../../redux/features/AdminSlicer/AdminSlicer";
import { useAppDispatch } from "../../redux/hooks";
import { useCallback } from "react";
import { JwtPayloadCustom, loginData } from "../../types/types";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const useAdmin = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const adminLogin = useCallback(
    async (data: loginData) => {
      try {
        const url = `${apiUrl}/admin/login`;
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

        navigate("/pending-orders");
      } catch {}
    },
    [apiUrl, dispatch, navigate]
  );
  return { adminLogin };
};

export default useAdmin;
