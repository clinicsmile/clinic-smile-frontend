import fetch from "../libs/axios";
import { Logout } from "../pages";

let setToken = () => {
  const user = window.localStorage.getItem("user");
  console.log(user);
  fetch.defaults.headers.common["Authorization"] = user
    ? `${document.cookie.replace("token=", "")}`
    : "";
};

const post = async (endPoint, req) => {
  return await execHttpMethod("post", endPoint, req);
};

const get = async (endPoint, req) => {
  return await execHttpMethod("get", endPoint, req);
};

const put = async (endPoint, req) => {
  return await execHttpMethod("put", endPoint, req);
};

const Delete = async (endPoint, req) => {
  ``;
  return await execHttpMethod("delete", endPoint, req);
};

const execHttpMethod = async (method, endPoint, params) => {
  params = method == "post" || "put" ? params : { params };
  setToken();
  try {
    const { data } = await fetch[method](endPoint, params);
    console.log(data);
    return data;
  } catch (error) {
      throw error;
  }
};

export { post, get, put, Delete };
