import { create } from "apisauce";
import {  toast } from 'react-toastify';
import { store } from "../redux/store";
import { logout } from "../redux/authSlice";
const baseURL = process.env.REACT_APP_BASE_URL;
const apiClient = create({
  baseURL:baseURL ,
});

apiClient.addRequestTransform(request => {
//   const authToken = store?.getState()?.auth?.token
//   if (!authToken) return;
//   request.headers.authorization = "Bearer " + authToken;
});

apiClient?.addResponseTransform((response) => {
  // Handle response errors
  if (response.status === 401) {
    if(store?.getState()?.auth?.token){

      toast.error("Session Expired")
      store.dispatch(logout())
    }

  } else if (response.status === 403) {
    toast.error('Restricted Route!!');
  }
});

function setAuthToken(token) {
  apiClient.setHeader("authorization", `Bearer ${token}`);
}

export { setAuthToken };
export default apiClient;