import fetch from "../../libs/axios";

let user = JSON.parse(window.localStorage.getItem("user") || "{}");

let setToken = () => {
  fetch.defaults.headers.common["Authorization"] = user
    ? `Bearer ${user.token}`
    : "";
};

export const post = async (endPoint, req) => {
  return await execHttpMethod("post", endPoint, req);
};

export const get = async (endPoint, req) => {
  return await execHttpMethod("get", endPoint, req);
};

const execHttpMethod = async (method, endPoint, params) => {
  setToken();
  params = method == "post" ? params : { params };
  endPoint = "api/v1/" + endPoint;
  try {
    const { data } = await fetch[method](endPoint, params);
    return data;
  } catch (error) {
    console.log(error.data);
    throw error;
  }
};
