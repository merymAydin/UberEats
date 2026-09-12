
import { api } from "../../api/axiosInstance";
import { toast } from "react-toastify";



export const loginUser = (credentials, rememberMe) => {


  return async (dispatch) => {
    try {
      const response = await api.post("/login", credentials);
      dispatch({
        type: "SET_USER",
        payload: response.data,
      });
      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
      console.log(error);
      return null;
    }

  };
};
