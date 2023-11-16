import fetch from "../libs/axios";
import fetchMultipart from "../libs/axiosMultipart";

let setToken = () => {
  const user = window.localStorage.getItem("user");
  fetch.defaults.headers.common["Authorization"] = user
    ? `${window.localStorage.getItem("token")}`
    : "";
};

let setTokenMultipart = () => {
  const user = window.localStorage.getItem("user");
  fetchMultipart.defaults.headers.common["Authorization"] = user
    ? `${window.localStorage.getItem("token")}`
    : "";
};

const post = async (endPoint, req) => {
  return await execHttpMethod("post", endPoint, req);
};

const postMultipart = async (endPoint, req) => {
  return await execHttpMethod("post", endPoint, req, true);
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

const execHttpMethod = async (method, endPoint, params, multipart = false) => {
  params = method == "post" || "put" ? params : { params };
  !multipart ? setToken() : setTokenMultipart();
  try {
    if (window.localStorage.getItem("user")) {
      params = {
        ...params,
        ...{
          userChange: JSON.parse(window.localStorage.getItem("user")).username,
        },
      };
    }
    const { data } = !multipart
      ? await fetch[method](endPoint, params)
      : await fetchMultipart[method](endPoint, params);
    return data;
  } catch (error) {
    throw error;
  }
};

export { post, get, put, Delete, postMultipart };
