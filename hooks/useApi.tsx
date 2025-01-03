// import axios from "axios";
// import { setCookie, getCookie, eraseCookie } from "../utils/cookie";

// const useAPI = () => {
//   const apiService = async ({ endpoint, method, payload, includeCookie }) => {
//     const config = {
//       url: `${import.meta.env.VITE_PUBLIC_BACKEND_URL}${endpoint}`,
//       method: method,
//       data: payload,
//       headers: includeCookie
//         ? {
//             Authorization: `Bearer ${getCookie("autobase-cookie-a")}`,
//           }
//         : undefined,
//     };

//     try {
//       const response = await axios(config);
//       if (response.data.error) {
//         console.error("API Error:", response.data.message);
//         return { error: true, data: response.data };
//       }

//       return { error: false, data: response.data };
//     } catch (error) {
//       console.error("API Error:", error.response || error.message);
//       return {
//         error: true,
//         data: error.response ? error.response.data : error.message,
//       };
//     }
//   };

//   const loginService = async ({ payload }) => {
//     try {
//       const response = await axios({
//         url: `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/admin/login`,
//         method: "POST",
//         data: payload,
//       });

//       if (response.status !== 200) {
//         return { error: true, data: response.data.message || "Login failed" };
//       }

//       const token = response.headers?.authorization?.split(" ")[1];
//       if (token) {
//         setCookie("autobase-cookie-a", token, 1);
//       }

//       return { error: false, data: response.data };
//     } catch (error) {
//       console.error("Login Error:", error.response || error.message);
//       return {
//         error: true,
//         data: error.response ? error.response.data : error.message,
//       };
//     }
//   };

//   const logoutService = async () => {
//     eraseCookie("autobase-cookie-a");

//     try {
//       const response = await apiService({
//         endpoint: "/admin/logout",
//         method: "POST",
//         payload: {},
//         includeCookie: false,
//       });

//       if (!response.error) {
//         console.log("Logout successful");
//       }

//       return response;
//     } catch (error) {
//       console.error("Error during logout:", error);
//       return { error: true, data: error };
//     }
//   };

//   return { apiService, loginService, logoutService };
// };

// export default useAPI;
