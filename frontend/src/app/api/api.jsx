import axios from "axios";
import store from "../../app/store/store.js";
import { setToken } from "../../features/auth/state/authSlice";

const api = axios.create({
  baseURL: "https://mindful-spirit-production-610f.up.railway.app/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth?.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // console.log(error.response?.status)
    if (!originalRequest?._retry && (error.response?.status === 400 ) ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/auth/refresh");
        const newAccessToken = res?.data?.accessToken;

        if (!newAccessToken) {
          throw new Error("Refresh token failed: no access token returned");
        }
        // console.log(res )
        store.dispatch(setToken(newAccessToken));
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
